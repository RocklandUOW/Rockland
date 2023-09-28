import {StyleSheet} from 'react-native';

const TabStyle = StyleSheet.create({
    navBar: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 90,
    },

    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },

    itemTextStyle: {
        color: 'black',
        fontSize: 12,
    },

    itemTextStyleFocused: {
        color: 'tomato',
        fontSize: 12,
    },

    itemIcon: {
        top: 5,
    }
  });

export default TabStyle;