import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Userpost from '../userpost/Userpost';

const styles = StyleSheet.create({
  userPostContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

function UserPosts() {
  const [userPosts, setUserPost] = useState([{}, {}, {}, {}, {}, {}]);
  return (
    <View style={styles.userPostContainer}>
      {userPosts.map(function (userpost) {
        return (
          <View>
            <Userpost />
          </View>
        );
      })}
    </View>
  );
}

export default UserPosts;
