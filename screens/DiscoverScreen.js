import {View, StyleSheet} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import MapView,{ PROVIDER_GOOGLE} from 'react-native-maps';
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

    return (
        <View style={GlobalStyle.center}>
            <MapView
            showsMyLocationButton={true}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            style={StyleSheet.absoluteFill}
            />

        </View>
    )
}