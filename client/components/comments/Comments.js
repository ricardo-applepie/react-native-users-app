import React, { useState } from 'react';
import { View, TextInput,ScrollView, Image, StyleSheet, Text, Button } from 'react-native';
import ProfileImage from '../profileImage/ProfileImage';
const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    Image: {
        height: 300,
        width: '100%'

    }
}
)
function Comments() {
    const [commentText, setCommentText]= useState('');
    const [commenInputValue, setCommenInputValue] = useState('');

    const [comments, setComments] = useState([{ name: "Yarn", comment: "wow so cute " }, { name: "Yarn", comment: "wow so cute " }, { name: "Yarn", comment: "wow so cute " }, { name: "Yarn", comment: "wow so cute " }, { name: "Yarn", comment: "wow so cute " },{ name: "Kelly", comment: "wow so cute " }, { name: "boris", comment: "greate" }, { name: "Tiku", comment: "am happy for you bro  " }, { name: "Kelvin", comment: "confirm" }, { name: "Mark", comment: "wow  I love this " }])
    
    
    function handlePostComment(){
        console.log(commenInputValue)
        if (commenInputValue=="") return;
        alert('Thanks for posting')
        comments.push({ name: "tomas", comment: commentText });
        setComments(comments)
        setCommenInputValue('')
    }
    return (
        <View style={{ height: '100%' }}>
            <ScrollView>

           <View style={{height:'80%'}}>
               {
                    comments.map(
                        function(comment){
                            return(
                    

                            
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                   <View>
                                        <ProfileImage/>
                                   </View>
                                    <View style={{ marginLeft:10 }}>
                                        <Text>{comment.name} {comment.comment}</Text>
                                   </View>
                                </View>
                                
                            )
                        }
                    )
               }
            </View>
            </ScrollView>
            <View style={{ height: '20%',flexDirection:'row', alignItems:'center' }}>
                <View style={{flex:0}}><ProfileImage/></View>
                <View style={{ flex: 2 }}>
                    <TextInput
                        placeholder="Type here to translate!"
                        onChangeText={(text) => {setCommenInputValue(text) ; setCommentText(text)}}
                        value={commenInputValue}
                       style={{paddingLeft:20}}
                    />
                </View>
                <View style={{ flex: 0 ,marginRight:10}}>
                    <Button
                        title="post"
                        onPress={handlePostComment}
                    />
                </View>
            </View>
        </View>
    )
}

export default Comments;