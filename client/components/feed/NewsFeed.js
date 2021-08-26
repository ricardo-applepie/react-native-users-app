import React, { useState } from 'react';
import { View, Text} from 'react-native';
import Post from '../post/Post';
import ProfileImage from '../profileImage/ProfileImage';

function NewsFeed(){
const [newsFeed,setNewsFeed] = useState([1,2,3,4,5,6,7,8,9]);
    return (
        <View style={{flexDirection:'column'}}>
            {newsFeed.map(
                function(post,index){
                    return(
                     <View key={index}> 
                        <Post/>
                     </View>
              )} 
            )}
        </View>
    )
}

export default NewsFeed ;