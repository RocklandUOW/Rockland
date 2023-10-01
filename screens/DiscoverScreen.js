import {View, Text, StyleSheet} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import React, {useState, useEffect} from 'react';

export default function DiscoverScreen({navigation}) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

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

    let text = "waiting...";

    if (errorMsg)
    {
        text(errorMsg);
    }
    else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={GlobalStyle.center}>
            <MapView
            showsMyLocationButton={true}
            showsUserLocation={true}
            style={StyleSheet.absoluteFill}
             />
            {/* <Text> {text} </Text> */}

        </View>
    )
}