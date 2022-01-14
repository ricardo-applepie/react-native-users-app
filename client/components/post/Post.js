import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Username from '../../components/username/Username';
import ProfileImage from '../../components/profileImage/ProfileImage';
import LikedBy from '../../components/likedBy/LikedBy';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  Image: {
    height: 300,
    width: '100%',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

function Post() {
  return (
    <View>
      <View style={styles.postHeader}>
        <ProfileImage />
        <Username />
      </View>
      <View style={styles.container}>
        <Image style={styles.Image} source={require('../../images/user.jpg')} />
      </View>
      <View>
        <LikedBy />
      </View>
    </View>
  );
}

export default Post;
