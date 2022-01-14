import * as React from 'react';
import {View, Text, Button} from 'react-native';

function Message({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="send"
        onPress={() => {
          alert('testing');
        }}
      />
      <View></View>
    </View>
  );
}

export default Message;
