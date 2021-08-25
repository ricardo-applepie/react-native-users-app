import React from 'react';
import { View, Text, Button, Image } from "react-native";

function UserInformation({ total, text}){
return(
    <View>
        <Text>{total} </Text>
        <Text>{text} </Text>

    </View>
)
}

export default UserInformation;