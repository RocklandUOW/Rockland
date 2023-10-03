import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import TabStyle from '../styles/TabStyle'
import { takePicture } from "../functions/pictureFunctions";
import { useRef, useState, useEffect } from "react";

// screens imports
import DiscoverScreen from '../screens/DiscoverScreen'
import CameraScreen from '../screens/CameraScreen'
import GalleryScreen from '../screens/GalleryScreen'

// the name of the page to be referenced
const discoverScreenName = 'Discover'
const cameraScreenName = 'Camera'
const galleryScreenName = 'Gallery'

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    // camera functionability :D
    const cameraRef = useRef(null);
    const [image, setImage] = useState(null); 
    const [rockType, setRockType] = useState(null);

    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarShowLabel : true,
                tabBarStyle: [TabStyle.navBar, TabStyle.shadow],
                tabBarIcon: ({focused, size}) => {
                    let iconName;
                    let routeName = route.name;

                    if (routeName === discoverScreenName) {
                        iconName = focused ? 'map-marker-radius' : 'map-marker-radius-outline';
                        return <MaterialCommunityIcons style={focused ? TabStyle.itemIconStyleFocused : TabStyle.itemIconStyle} name={iconName} size={size}/>
                    } 
                    else if (routeName === galleryScreenName) {
                        iconName = focused ? 'view-gallery' : 'view-gallery-outline';
                        return <MaterialCommunityIcons style={focused ? TabStyle.itemIconStyleFocused : TabStyle.itemIconStyle} name={iconName} size={size} />
                    } 
                    else if (routeName === cameraScreenName)
                    {
                        iconName = focused ? 'camera' : 'camera-outline';
                        return <MaterialCommunityIcons style={focused ? TabStyle.itemButtonStyleFocused : TabStyle.itemButtonStyle} name={iconName} size={40} />
                    }
                },
                tabBarLabel: ({focused}) => {
                    let label = null;
                    let routeName = route.name;

                    if (routeName === discoverScreenName) {
                        label = routeName;
                        return <Text style = {focused ? TabStyle.itemTextStyleFocused : TabStyle.itemTextStyle}>{label}</Text>
                    } else if (routeName === galleryScreenName) {
                        label = routeName;
                        return <Text style = {focused ? TabStyle.itemTextStyleFocused : TabStyle.itemTextStyle}>{label}</Text>
                    } 
                    else if (routeName === cameraScreenName) {
                        label = routeName;
                        return <Text style = {focused ? TabStyle.itemButtonTextStyleFocused : TabStyle.itemButtonTextStyle}>{label}</Text>
                    }
                },
            })}>
                <Tab.Screen name={discoverScreenName} component={DiscoverScreen} />
                <Tab.Screen name={cameraScreenName} 
                 children={()=><CameraScreen cameraRef={cameraRef} image={image}/>}
                 options={{unmountOnBlur: true}}
                    // listeners property is used to override the onpress function of the icon
                    listeners={({ navigation }) => ({
                        tabPress: async (e) => {
                            // Prevent default action
                            e.preventDefault();

                            // this navigation feature bullshit has minimal to no documentation, this motherfucking feature took me almost 2 hour to figure out :)
                            // the index is determined by the position of the Tab.Screen positioning
                            if (navigation.getState().index !== 1)
                            {
                                navigation.navigate(cameraScreenName); 
                            } 
                            else 
                            {
                                takePicture(cameraRef, setImage, setRockType);
                            }
                        },
                    })}
                />
                <Tab.Screen name={galleryScreenName}
                    children={()=> <GalleryScreen image={image} rockType={rockType} />}
                />
            </Tab.Navigator>
        </NavigationContainer>   
    )
}