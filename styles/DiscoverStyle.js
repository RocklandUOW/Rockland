import {StyleSheet, Dimensions} from 'react-native';

const DiscoverStyle = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default DiscoverStyle;