import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Username from '../../components/username/Username';
import PostDescription from '../../components/postDescription/postDescription';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  Image: {
    height: 300,
    width: '100%',
  },
});

function LikedBy() {
  const navigation = useNavigation();

  return (
    <View style={{marginTop: 20, marginLeft: 10}}>
      <View>
        <Username />
        <PostDescription />
      </View>
      <View>
        <Text
          onPress={() => navigation.push('Comments')}
          style={{marginTop: 5}}>
          View all 1.894 comments{' '}
        </Text>
      </View>
    </View>
  );
}

export default LikedBy;
