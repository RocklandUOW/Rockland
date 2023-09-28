import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import TabStyle from '../styles/TabStyle'

// screens imports
import Discover from '../screens/Discover'
import Camera from '../screens/Camera'
import Gallery from '../screens/Gallery'

// the name of the page to be referenced
const discoverScreenName = 'Discover'
const cameraScreenName = 'Camera'
const galleryScreenName = 'Gallery'

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarShowLabel : true,
                tabBarStyle: [TabStyle.navBar, TabStyle.shadow],
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let routeName = route.name;

                    if (routeName === discoverScreenName) {
                        iconName = focused ? 'map-marker-radius' : 'map-marker-radius-outline';
                    } else if (routeName === galleryScreenName) {
                        iconName = focused ? 'view-gallery' : 'view-gallery-outline';
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />
                },
                tabBarLabel: ({focused}) => {
                    let label = null;
                    let routeName = route.name;

                    if (routeName === discoverScreenName) {
                        label = routeName;
                    } else if (routeName === galleryScreenName) {
                        label = routeName;
                    }

                    return <Text style = {focused ? TabStyle.itemTextStyleFocused : TabStyle.itemTextStyle}>{label}</Text>
                }
            })}>
                <Tab.Screen name={discoverScreenName} component={Discover} />
                <Tab.Screen name={cameraScreenName} component={Camera} />
                <Tab.Screen name={galleryScreenName} component={Gallery} />
            </Tab.Navigator>
        </NavigationContainer>   
    )
}