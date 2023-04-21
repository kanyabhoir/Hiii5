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
import ArchivedScreen from './screens/ArchivedScreen';
import Settings from './screens/Settings';
import ChatScreen from './screens/ChatScreen';
import CaptureImage from './screens/Components/CaptureImage';
import Getout from './screens/Components/Getout';
import ViewContainer from './screens/Components/ViewContainer';


ArchivedScreen
export default function Routers() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"Registration"}>
      <Stack.Screen name="SignUp" component={Registration} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="postupload" component={PostUpload} />
      <Stack.Screen name="statusscreen" component={StatusScreen} />
      <Stack.Screen name="archivedscreen" component={ArchivedScreen} />
      <Stack.Screen name="settings" component={Settings} />
      <Stack.Screen name="chatscreen" component={ChatScreen} />
      <Stack.Screen name="captureImage" component={CaptureImage} />
      <Stack.Screen name="getout" component={Getout} />
      <Stack.Screen name="viewcontainer" component={ViewContainer} />
    </Stack.Navigator>

    </NavigationContainer>
 
  );
}


