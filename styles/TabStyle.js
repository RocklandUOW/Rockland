import {StyleSheet} from 'react-native';

const TabStyle = StyleSheet.create({
    navBar: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#84C183',
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
        fontSize: 14,
        top: -20,
    },

    itemTextStyleFocused: {
        color: 'black',
        fontSize: 15,
        top: -20,
    },

    itemIconStyle: {
        color: 'black',
    },

    itemIconStyleFocused: {
        color: 'black'
    },

    itemButtonStyle: {
        color: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 7,
        borderColor: '#5E9C5D',
        backgroundColor: '#00FF19',
        textAlign: 'center',
        paddingBottom: 20,
        textAlignVertical: 'center',
    },

    itemButtonStyleFocused: {
        color: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 7,
        borderColor: '#5E9C5D',
        backgroundColor: '#00FF19',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingBottom: 20,
        fontSize: 45,
    },

    itemButtonTextStyle: {
        color: 'black',
        fontSize: 16,
        bottom: 25,
    },

    itemButtonTextStyleFocused: {
        color: 'black',
        fontSize: 17,
        bottom: 25,
    },
  });

export default TabStyle;