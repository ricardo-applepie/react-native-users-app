import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView} from 'react-native';
import ProfileImage from '../../components/profileImage/ProfileImage';

function Search(){

    const [usersList, setUsersList] = useState([{ name: "Ann", imageUrl: "" }, { name: "Ann", imageUrl: "" }, { name: "Ann", imageUrl: "" }, { name: "Ann", imageUrl: "" }, { name: "Ann", imageUrl: "" }, { name: "Joan", imageUrl: "" }, { name: "Ricardo", imageUrl: "" }, { name: "Paskal", imageUrl: "" }, { name: "Ricardo", imageUrl: "" }, { name: "Kelvin", imageUrl: "" }, { name: "Margi", imageUrl: "" }])
    const [searchInput, setSearchInput]= useState('')
   
    function handleChangeText(text){
     console.log(text)
     setSearchInput(text)
    }
    return(
        <View style={styles.wrapper}>

            <View style={styles.container}>
            
               <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => handleChangeText(text)}
                        value={searchInput}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.buttonWrapper}>
                <Button
                title="search"
                style={styles.button}
                />
                </View>
            </View>
            <View>
                <ScrollView>
                <View>
                    {usersList.filter(user => user.name.toLowerCase().includes(searchInput))
                    .map(
                        function(user,index){
                            return(
                           
                                <View key={index} style={styles.container}>
                                        <ProfileImage />
                                        <Text style={styles.username}>
                                            {user.name}
                                        </Text>

                                    </View>
                            )
                        }
                    )
                    }
                </View>
                </ScrollView>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper:{
    marginLeft:10,
    marginRight:10
    },
    container:{
        flexDirection: 'row',
        alignItems:'center',
    },
    username:{
        marginLeft:10
    },
    input: {
        height: 35,
        marginRight:10,
        borderWidth: 1,
        padding: 10,
      
    },
    button:{
       
    },
    inputWrapper: {
        flex: 3
    },
    buttonWrapper:{
       flex:1,
       
    }
});

export default Search ;
