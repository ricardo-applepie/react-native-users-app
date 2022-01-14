import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

function UserDescription() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold'}}>Ricardo</Text>
      <Text>
        My name is ricaro and am 20 years old , I have a good heart . i love my
        momma
      </Text>
    </View>
  );
}

export default UserDescription;
