import {View, Text, StyleSheet} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import {MapView, PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';
import React, {useState, useEffect} from 'react';

export default function DiscoverScreen({navigation}) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [text, setText] = useState("waiting...");

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            setErrorMsg("Permission to access location was denied");
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
    
          let backPerm = await Location.requestBackgroundPermissionsAsync();
          console.log(backPerm);
        })();
      }, []);

    if (errorMsg)
    {
      setText(errorMsg);
    }
    else if (location) {
      setText(JSON.stringify(location));
    }

    return (
        <View style={GlobalStyle.center}>
            <MapView
            showsMyLocationButton={true}
            showsUserLocation={true}
            provider={PROVIDER_GOOGLE}
            style={StyleSheet.absoluteFill}
             />
            {/* <Text> {text} </Text> */}

        </View>
    )
}