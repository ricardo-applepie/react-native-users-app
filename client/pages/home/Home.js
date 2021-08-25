import React,{useState} from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import Footer from '../../components/footer/Footer';
import NewsFeed from '../../components/feed/NewsFeed'
function HomeScreen({ navigation }) {
    return (
        <View style={{ height: '100%'} } >
            <ScrollView>
            <View style={{height:'85%'}}>

                <NewsFeed/>
            </View>
            </ScrollView>
            <View style={{ height: '15%' }}>
                <Footer navigation={navigation} />
            </View>
            
        </View>
    );
}

export default HomeScreen ;