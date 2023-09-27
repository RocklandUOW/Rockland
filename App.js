import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import style from './styles/AppStyle.js'

export default function App() {
  return (
    <View style={style.container}>
      <Text>Let's Rock!... land</Text>
      <StatusBar style="auto" />
    </View>
  );
}