import * as React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';
import UserInformation from '../../components/userInformation/UserInformation';
import ProfileImage from '../../components/profileImage/ProfileImage';
import UserDescription from '../../components/userDescription/UserDescription';
import UserPosts from '../../components/userposts/UserPosts';
import Footer from '../../components/footer/Footer';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  userinformation: {
    marginLeft: 20,
  },
});

function Profile({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View>
          <ProfileImage />
        </View>

        <View style={styles.container}>
          <View style={styles.userinformation}>
            <UserInformation total="5" text="post" />
          </View>
          <View style={styles.userinformation}>
            <UserInformation total="1023" text="followers" />
          </View>
          <View style={styles.userinformation}>
            <UserInformation total="2012" text="Following" />
          </View>
        </View>
      </View>

      <View>
        <UserDescription />
      </View>

      <View style={{marginTop: 40, marginBottom: 20}}>
        <Button
          title="Edit profile"
          onPress={() => {
            try {
              navigation.navigate('Register');
            } catch (error) {
              console.log(error);
            }
          }}
        />
      </View>

      <View>
        <UserPosts />
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

export default Profile;
