import React from 'react'
import { View } from 'react-native'
import  {MaterialIcons} from '@expo/vector-icons'
import {styles} from '../styles/RecordBtnStyles'


// Displays record button on the main screen
const RecordButton = ({setModalOpen}) => {
    return (
        <View style={styles.bottomView}>
            <View style={styles.buttonContainer}>
                <MaterialIcons 
                    name='videocam'
                    size={45}
                    onPress={()=>setModalOpen(true)}    //On click sets the modal to "true" i.e Open camera.
                    color="#6fa5b1"
                ></MaterialIcons>
            </View>
    </View> 
    );
}
 
export default RecordButton;