import React from 'react'
import {Text, View} from 'react-native'
import {Video} from 'expo-av'
import {styles} from '../styles/videoStyles'

//Displays the video on the homescreen
const VideoComponent = ({exists, record, status, setStatus}) => {

    const video = React.useRef(null);

    return ( 
        <View>
            {exists?(
                // If a video exists than display the video.
                <View style={styles.videoContainer}>
                    <View style>
                        <Text style={styles.videoContainerText}>Recordings</Text>
                    <Video ref={video} style={styles.video}
                    source={{
                        uri: record             //Displays the video by uri set by camera component
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                    </View>
                </View>
            ):
            // Else display a view to record a new video.
            (
                <View style={styles.noVideoContainer} >
                    <Text style={styles.noVideoContainerText} >No recording</Text>
                    <Text style={styles.startRecordingText} >Start recording by tapping the record button</Text>
                </View>
            )}
        </View>
    );
}
 
export default VideoComponent;