
import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    buttonContainer:{
        width:65, 
        height:65, 
        borderRadius: 50, 
        borderWidth: 4, 
        borderColor: '#6fa5b1', 
        alignItems: 'center', 
        justifyContent: 'center'
    },  
    bottomView: {
        width: '100%',
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10
    }
})