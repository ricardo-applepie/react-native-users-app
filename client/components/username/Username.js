import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  Image: {
    height: 300,
    width: '100%',
  },
});
function Username() {
  return (
    <View style={{marginLeft: 3}}>
      <Text> Ricardo</Text>
    </View>
  );
}

export default Username;
