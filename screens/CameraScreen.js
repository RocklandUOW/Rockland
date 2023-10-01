import {View, Text} from 'react-native';
import {Camera, CameraType} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library';
import CameraStyle from '../styles/CameraStyle'
import {useState, useEffect} from 'react';

export default function CameraScreen(props, {navigation}) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, [])

    return (
        <View style={CameraStyle.cameraView}>
            <Camera
            style={CameraStyle.camera}
            type={type}
            flashMode={flash}
            ref={props.cameraRef}
            >
                
            </Camera>
        </View>
    )
}
