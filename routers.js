import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Registration from './screens/Registration';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostUpload from './screens/PostUpload';
// import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import StatusScreen from './screens/StatusScreen';
import ChatScreen from './screens/ChatScreen';
import CallsScreen from './screens/CallsScreen';
import ArchivedScreen from './screens/ArchivedScreen';
ArchivedScreen
export default function Routers() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"Registration"}>
      {/* <Stack.Screen name="SignUp" component={Registration} /> */}
      {/* <Stack.Screen name="login" component={Login} /> */}
      {/* <Stack.Screen name="postupload" component={PostUpload} /> */}
      <Stack.Screen name="statusscreen" component={StatusScreen} />
      <Stack.Screen name="chatscreen" component={ChatScreen} />
      <Stack.Screen name="callsscreen" component={CallsScreen} />
      <Stack.Screen name="archivedscreen" component={ArchivedScreen} />
    </Stack.Navigator>

    </NavigationContainer>
 
  );
}


