import * as MediaLibrary from 'expo-media-library';
import { predictImage } from "../functions/fetches";

export async function takePicture (cameraRef, setImage) {
    const options = {
        // base64: true,
        skipProcessing: true,
    };

    if (cameraRef) {
        try {
            const data = await cameraRef.current.takePictureAsync(options);
            setImage(data.uri);
            predictImage(data.uri);
            // savePicture(data.uri)
        } catch(e) {
            console.log(e);
            setImage(null);
        }
    } else {
        console.log("no camera ref");
        setImage(null);
    }
}

async function savePicture(image) {
    if (image)
    {
        try {
            await MediaLibrary.createAssetAsync(image);
            alert('picture saved in your gallery')
        }
        catch (e) {
            console.log(e);
        }
    }
}