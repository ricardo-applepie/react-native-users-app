import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageSize: {
    width: 100,
    height: 100,
    margin: 1,
  },
});

function Userpost({postUrl}) {
  return (
    <View>
      <Image
        style={styles.imageSize}
        source={require('../../images/user.jpg')}
      />
    </View>
  );
}

export default Userpost;
