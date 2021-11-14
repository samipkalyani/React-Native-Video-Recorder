import React from 'react'
import {Text, View} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {styles} from '../styles/headerStyles'

//Header for the app.
const Header = () => {
    return ( 
    <View style={styles.header}>
        <MaterialIcons name="monochrome-photos" size={34} color="white" />
        <Text style={styles.headerText}>  VideoREC</Text>
    </View> 
    );
}
 
export default Header;