import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import GlobalStyle from '../styles/GlobalStyle'

export default function GalleryScreen(props, {navigation}) {
    return (
        <View style={GlobalStyle.center}>
            {props.image ? 
                /* <Image style={{width: 300, height: 600, borderWidth: 1, borderColor: 'red'}} 
                source={{uri: `data:image/jpg;base64,${props.image}`}}/> */
                    <Image style={{width: Dimensions.get('window').width/2, height: Dimensions.get('window').height/2}} 
                    source={{uri: props.image}}/>
                    
                :
                <Text>Gallery Screen</Text>
            }
            {props.rockType ? <Text>{props.rockType}</Text> : (props.image ? <Text>loading...</Text> : null)}
        </View>
    )
}