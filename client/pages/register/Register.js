import React, {useState} from 'react';
import {Link} from '@react-navigation/native';
import {Alert, Button, View, StyleSheet, TextInput, Text} from 'react-native';

function Register({authState, data}) {
  const [passwordValue, SetPasswordValue] = useState('');
  const [emailValue, SetemailValue] = useState('');
  const [usernameValue, SetUsernameValue] = useState('');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, Setpassword] = useState('');

  function onChangeUsername(text) {
    SetUsernameValue(text);
    setUsername(text);
  }
  function onChangeEmail(text) {
    SetemailValue(text);
    setEmail(text);
  }
  function onChangePassword(text) {
    SetPasswordValue(text);
    Setpassword(text);
  }
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dateObj = new Date();
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  const createdAt = month + '\n' + day + ',' + year;

  let logindetails = {
    username,
    email,
    password,
    createdAt,
  };
  function handleRegsiter() {
    let url = 'http://192.168.137.129:4000/users';
    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logindetails),
    });
    authState(true);
  }

  return (
    <View>
      <View style={styles.loginImage}>
        <Text>ReChat {data.name}</Text>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            onChangeUsername(text);
          }}
          value={usernameValue}
          placeholder="username"
        />
        <TextInput
          style={styles.input}
          onChangeText={e => onChangeEmail(e)}
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
            <Button title="Register" onPress={() => handleRegsiter()} />
          </View>
          <View style={styles.loginLinkWrapper}>
            <Text>
              {' '}
              Already have and account ? please
              <Text style={{color: 'blue'}}>
                <Link to={{screen: 'Login', params: {id: 'jane'}}}>
                  &nbsp; login
                </Link>
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
    height: '80%',
  },
  loginImage: {
    height: '20%',
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

export default Register;
