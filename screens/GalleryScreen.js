import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle'

export default function GalleryScreen(props, {navigation}) {
    return (
        <View style={GlobalStyle.center}>
            {props.image ? 
                /* <Image style={{width: 300, height: 600, borderWidth: 1, borderColor: 'red'}} 
                source={{uri: `data:image/jpg;base64,${props.image}`}}/> */
                <Image style={[StyleSheet.absoluteFill, {}]} 
                source={{uri: props.image}}/>
                :
                <Text>g muncul bajingan</Text>
            }
        </View>
    )
}