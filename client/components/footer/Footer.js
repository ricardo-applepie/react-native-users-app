import * as React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({});

function Footer({navigation}) {
  console.log(navigation);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 60,
      }}>
      <View>
        <Text onPress={() => navigation.navigate('Home')}>Home</Text>
      </View>
      <View>
        <Text onPress={() => navigation.navigate('Search')}>search</Text>
      </View>
      <View>
        <Text onPress={() => navigation.navigate('Detail')}>vids</Text>
      </View>
      <View>
        <Text onPress={() => navigation.navigate('Detail')}> shop</Text>
      </View>
      <View>
        <Text onPress={() => navigation.navigate('Profile')}> profile</Text>
      </View>
    </View>
  );
}

export default Footer;
