import React, {useState} from 'react'
import { Text, View, Modal, TouchableOpacity } from 'react-native'
import moment from 'moment';
import {Camera} from 'expo-camera'
import  {MaterialIcons} from '@expo/vector-icons'
import {styles} from '../styles/cameraStyles'

const CameraComponent = ({modalOpen,setModalOpen,setExists,setRecord}) => {

    //Variables to record the video and display the length of the ongoing recording video.
    const [camera, setCamera] = useState(null)
    const [isRecording, setIsRecording] = useState(false)
    const [time,setTime] = useState(0)
    const [timer,setTimer] = useState(0)

    //Starts recording the video.
    const startRecording = async () => {
        if(camera){
            setIsRecording(true)
            //Starts counting time of length of the video
            startTimer()
            const data = await camera.recordAsync({
                maxDuration: 300
            })
            //Updates the recorded video in the "record" variable 
            setRecord(data.uri)
        }
    }

    //Stops recording the video.
    const stopRecording = async() => {
        //Stops counting the length of ongoing video.
        stopTimer()
        //Initializes the start time to 0.
        setTime(0)
        //stops the camera recording 
        await camera.stopRecording()
        //Exits from the camera and brings user back to the main screen
        setModalOpen(false)
        //Sets exist as "true" i.e a video exists which is to be displayed
        setExists(true)
    }

    //A function that is used for dual functionality of the record button i.e "start recording" and "stop recording"
    const func = async() => {
        if(!isRecording){
            setIsRecording(true)
            await startRecording()
        }else{
            setIsRecording(false)
            await stopRecording()
        }   
    }

    //Starts counting
    const startTimer = () =>{
        let i=0;
        setTimer(setInterval(()=>{
            i=i+1;
            setTime(i)
        },1000))
    }

    // Stops counting
    const stopTimer = () =>{
        if(timer){
            clearInterval(timer)
        }
    }

    return ( 
    <Modal visible={modalOpen}
        style={styles.modal}
        onRequestClose={()=>setModalOpen(false)}>
        
        {/* Main view - Camera */}
        <View style={styles.container}>
            {/* Camera */}
            <Camera 
            ref={ref => setCamera(ref)}
            style={styles.container} 
            type={Camera.Constants.Type.back}
            captureAudio>
            </Camera>

            <MaterialIcons
                name='close'
                size={36}
                onPress={()=>setModalOpen(false)}
                style={styles.closeBtn}/>

            {/* Recording time */}
            <Text style={styles.timerContainer}>
                <Text style={styles.timerDot}>● </Text>
            {moment().startOf('day').seconds(time).format('mm:ss')}
            </Text>

            <View>
                {/* Record button */}
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.buttonStopContainer, styles.btnUse]}
                    onPress={() => func()}>
                        {isRecording?(
                            <View style={styles.buttonStop}></View>
                        ):(
                            <View style={styles.buttonStart}></View>
                        )}
                </TouchableOpacity>
            </View>
        {/* <Button title="Take video" onPress={() => startRecording()} />
        <Button title="Stop Video" onPress={() => stopRecording()} /> */}
        </View>    
    </Modal> 
    );
}
 
export default CameraComponent;