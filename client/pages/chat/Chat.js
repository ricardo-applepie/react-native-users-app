import React, {useState} from 'react';

import {
  View,
  Text,
  Button,
  ScrollView,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from 'react-native';

function Chat({navigation}) {
  const [inputValue, setInputValue] = useState('');
  const [userText, setUserText] = useState('');
  const [messages, setMessages] = useState([
    'Had the states not decided to make license plates a forum for a ',
    'Had the states not decided to make licensages, the "Choose Life" cases would be easy.',
    'is everthing okay ? lates a forum for a sometimes comical array of messages, the "Choose Life" cases would be easy.',
    'Had the states not decided to make lise Life" cases would be easy.',
  ]);

  function handleMessageSend() {
    messages.push(userText);
    setMessages(messages);
    setInputValue('');
  }

  return (
    <View style={{height: '100%'}}>
      <ScrollView>
        <View
          style={{
            height: '85%',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}>
          {messages.map(function (message, index) {
            return (
              <Text style={styles.message} key={index}>
                {message}
              </Text>
            );
          })}
        </View>
      </ScrollView>
      <View
        style={{
          height: '15%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: 3,
        }}>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setInputValue(text);
            setUserText(text);
          }}
          placeholder="send message "
          value={inputValue}
        />
        <Button title="Send" onPress={handleMessageSend} style={{flex: 1}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 35,
    borderWidth: 1,
    padding: 10,
  },
  message: {
    color: '#ffffff',
    fontSize: 15,
    backgroundColor: 'blue',
    marginBottom: 10,
    padding: 20,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
export default Chat;
