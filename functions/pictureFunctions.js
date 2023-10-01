import * as MediaLibrary from 'expo-media-library';

export async function takePicture (cameraRef, setImage) {
    if (cameraRef) {
        try {
            const data = await cameraRef.current.takePictureAsync();
            setImage(data.uri);
            savePicture(data.uri);
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
            alert('picture saved in ur degenerate gallery')
        }
        catch (e) {
            console.log(e);
        }
    }
}