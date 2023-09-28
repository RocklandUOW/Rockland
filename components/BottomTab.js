import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
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
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'black',
                tabBarIconStyle: TabStyle.itemIcon,
                tabBarLabelStyle: TabStyle.itemTextStyle,
                tabBarItemStyle: TabStyle.itemStyle,
                tabBarStyle: [TabStyle.navBar, TabStyle.shadow],
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let routeName = route.name;

                    if (routeName === discoverScreenName) {
                        iconName = focused ? 'map-marker-radius' : 'map-marker-radius-outline';
                    } else if (routeName === cameraScreenName) {
                        iconName = focused ? 'camera' : 'camera-outline';
                    } else if (routeName === galleryScreenName) {
                        iconName = focused ? 'view-gallery' : 'view-gallery-outline';
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />
                },
            })}>
                <Tab.Screen name={discoverScreenName} component={Discover} />
                
                <Tab.Screen name={galleryScreenName} component={Gallery} />
            </Tab.Navigator>
        </NavigationContainer>   
    )
}