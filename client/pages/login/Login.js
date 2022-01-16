import React, {useState} from 'react';
import {Link} from '@react-navigation/native';
import {Alert, Button, View, StyleSheet, TextInput, Text} from 'react-native';

function Login(authState) {
  const [passwordValue, SetPasswordValue] = useState('');
  const [emailValue, SetemailValue] = useState('');

  function onChangeEmail(text) {
    SetemailValue(text);
  }

  function onChangePassword(text) {
    SetPasswordValue(text);
  }

  let logindetails = {
    emailValue,
    passwordValue,
  };

  function LoginUser() {
    fetch('http://192.168.137.129:4000/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logindetails),
    }).then(data => console.log(data));
  }

  return (
    <View>
      <View style={styles.loginImage}>
        <Text>ReChat</Text>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeEmail(text)}
          value={emailValue}
          placeholder="email"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => onChangePassword(text)}
          value={passwordValue}
          secureTextEntry={true}
          placeholder="password"
        />
        <View style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Button title="Login" onPress={() => LoginUser()} />
          </View>
          <View style={styles.loginLinkWrapper}>
            <Text>
              No account ? please
              <Text style={{color: 'blue'}}>
                <Link to={{screen: 'Register'}}>&nbsp; register now</Link>
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '70%',
  },
  loginImage: {
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
  },
  loginLinkWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});

export default Login;
