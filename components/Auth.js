import React, {useState, useEffect} from 'react'
import { Text, View,} from 'react-native'
import {Camera} from 'expo-camera'

const Auth = () => {

    // Camera and microphone permission variables
    const [hasAudioPermission, setHasAudioPermission] = useState(null)
    const [hasCameraPermission, setHasCameraPermission] = useState(null)


    //Asks permission on first run of the app.
    useEffect(()=>{
        (async ()=>{
            const cameraStatus = await Camera.requestPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted')

            const audioStatus = await Camera.requestMicrophonePermissionsAsync();
            setHasAudioPermission(audioStatus.status === 'granted')
        })();
    },[])

    //Displays views based on permission received from the user.

    if (hasCameraPermission === null || hasAudioPermission === null){
        return <View />
    }

    if(hasCameraPermission === false || hasAudioPermission === false){
        return (
            <View>
                <Text>Aw, Snap! Need camera/audio permissions.</Text>
            </View>
        )
    }

    return <View />

}
 
export default Auth;