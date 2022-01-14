import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './pages/profile/Profile';
import Chat from './pages/chat/Chat';
import HomeScreen from './pages/home/Home';
import Comments from './components/comments/Comments';
import Search from './pages/search/Search';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const axios = require('axios');
const Stack = createNativeStackNavigator();

function App() {
  const [isSignedIn, SetIsSignedIn] = React.useState(false);
  const [data, setData] = React.useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        {!isSignedIn ? (
          <>
            <Stack.Screen name="Register">
              {props => (
                <Register {...props} authState={SetIsSignedIn} data={data} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Login">
              {props => <Login {...props} authState={SetIsSignedIn} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Comments" component={Comments} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Search" component={Search} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
