import React, { useState } from 'react';
import { Link } from '@react-navigation/native';

import { Alert, Button, View, StyleSheet, TextInput, Text } from 'react-native';

function Login({ handleUserRegister}) {

    const [passwordValue, SetPasswordValue] = useState('');
    const [emailValue, SetemailValue] = useState('');
    const [usernameValue, SetUsernameValue]= useState('');
    
    function onChangeEmail(text) {
        SetemailValue(text)
    }
    function onChangePassword(text) {
        SetPasswordValue(text);
    }

   function  onChangeUsername(text){
       SetUsernameValue(text)
    }

    return (
        <View>
            <View style={styles.loginImage}>
                <Text >ReChat</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangePassword(text)}
                    value={usernameValue}
                    secureTextEntry={true}
                    placeholder="username"

                />
                <TextInput
                    style={styles.input}
                    onChangeText={(e) => onChangeEmail(e)}
                    value={emailValue}
                    placeholder="email"

                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => onChangePassword(text)}
                    value={passwordValue}
                    secureTextEntry={true}
                    placeholder="password"

                />

                
                <View style={styles.buttonWrapper}>
                    <View style={styles.button}>
                        <Button

                            title="Register"
                            onPress={() => handleUserRegister()}
                        />
                    </View>
                    <View style={styles.loginLinkWrapper}>
                        <Text>Already have and account ? please
                            <Text style={{ color: 'blue' }}>
                                <Link to={{ screen: 'Login', params: { id: 'jane' } }}>
                                    &nbsp; login
                                </Link>
                          </Text>
                        </Text>
                    </View>
                </View>
            </View>

        </View>
    )
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
        height: '80%'

    },
    loginImage: {
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 40
    },
    loginLinkWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
});

export default Login;