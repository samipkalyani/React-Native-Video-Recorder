import React, {useState} from 'react'
import {View} from 'react-native'
import {styles} from './styles/globalStyles'
import Header from './shared/Header'
import Camera from './components/Camera'
import Video from './components/Video'
import RecordButton from './components/RecordButton';
import Auth from './components/Auth';

const App = () => {

    //Camera is opened as a modal
    //modalOpen is used to set a boolean value that opens the camera.
    const [modalOpen, setModalOpen] = useState(false)

    //Holds the recorded data(video)
    const [record, setRecord] = useState(null)
    
    //Variable used to indicate if the user is recording for the first time
    //or has a recorded a video (Different screens are displayed accordingly.)
    const [exists, setExists] = useState(false)
    const [status, setStatus] = React.useState({});
    
    return(
        <View style={styles.global}>

            {/* Asks for camera and microphone permissions.*/}
            <Auth></Auth>

            {/* A simple header for our app. */}
            <Header></Header>
            
            {/* Shoots a video. */}
            <Camera modalOpen={modalOpen} setModalOpen={setModalOpen} setExists={setExists} setRecord={setRecord}></Camera>

            {/* Displays the recorded video. */}
            <Video exists={exists} record={record} status={status} setStatus={setStatus}></Video>

            {/* Opens up the camera. */}
            <RecordButton setModalOpen={setModalOpen}></RecordButton>
        </View>
    )
}
 
export default App;