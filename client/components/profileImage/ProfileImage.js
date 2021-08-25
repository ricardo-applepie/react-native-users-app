import React from "react";
import { View, Text, Button, Image, StyleSheet} from "react-native";



const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        
    },
    stretch: {
        width: 50,
        height: 50,
        borderBottomLeftRadius:20,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        borderBottomRightRadius:20
  
    },
});



function ProfileImage(){

    return(
        <View style={styles.container}>
            <Image
                style={styles.stretch}
                source={require('../../images/user.jpg')}
            />
        </View>
     
    )
}

export default ProfileImage ;
