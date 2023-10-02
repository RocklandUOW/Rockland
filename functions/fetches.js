import axios from 'axios';

export const predictImage = async (imageuri, setRockType) => {
    setRockType(null);
    const imageData = new FormData()

    imageData.append("file", {
        uri: imageuri,
        name: 'image.jpg',
        fileName: 'image',
        type: 'image/jpg'
    })

    // currently just straight up fires the api to the deployment version since have no fucking idea how to call it locally (react native is the best app ever i like react native holy fuck it is so great why the fuck does it work this way i love react native :D)
    axios.post('https://getrockpredictionalpha-2tv4ye757q-ts.a.run.app/predict', imageData, {
            headers: { 'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json' },
        }).then(res => {
            setRockType(res.data.class_name);
        }).catch(err => {
            console.log('bruh');
        });
}