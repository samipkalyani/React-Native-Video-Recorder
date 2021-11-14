
import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    closeBtn:{
        position: "absolute",
        top: 20,
        left: 10,
        color: "#fff"
    },
    timerContainer:{
        position: "absolute",
        top: 20,
        left: 140,
        color: "#fff",
        fontSize: 20
    },
    timerDot:{
        color: "#D91E18"
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        width:Dimensions.get('window')[0],
        height: Dimensions.get('window')[1],
    },
    buttonContainer: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: '#fff',
        marginRight: 8
    },
    buttonStopContainer: {
        backgroundColor: 'transparent',
    },
    buttonStop: {
        backgroundColor: '#D91E18',
        width: 45,
        height: 45,
        borderRadius: 10,
    },
    buttonStart: {
        backgroundColor: '#D91E18',
        width: 60,
        height: 60,
        borderRadius: 60,
    },
    btnUse: {
        position: 'absolute',
        width: 80,
        height: 80,
        right: 140,
        top: -100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.9)',
        width,
        height,
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        width,
        height,
    }
})