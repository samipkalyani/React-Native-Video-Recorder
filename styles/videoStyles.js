
import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    videoContainer:{
        shadowColor: '#ababab',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        width: 350,
        backgroundColor: "#fff",
        padding: 20,
        paddingBottom: 40,
        borderRadius: 8
    },
    videoContainerText:{
        marginBottom: 15,
        fontSize: 24,
        fontWeight: "200"
    },
    video: {
        // alignSelf: 'center',
        width: 310,
        height: 220,
        marginBottom: 20
    },
    noVideoContainer:{
        flex: 1,
        alignContent:
        "center",
        width: "80%"
    },
    noVideoContainerText:{
        top: 50,
        fontSize: 36,
        fontWeight: "100",
        textAlign: "center"
    },
    startRecordingText:{
        top: 64,
        fontSize: 16,
        fontWeight: "100",
        textAlign: "center"
    }
})