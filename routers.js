import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import StatusScreen from './screens/StatusScreen';
import ChatScreen from './screens/ChatScreen';
import CallsScreen from './screens/CallsScreen';
import ArchivedScreen from './screens/ArchivedScreen';
import ProfileScreen from './screens/ProfileScreen';
import CustomSidebarMenu from './screens/CustomSidebarMenu';
import SignUp from './screens/Registration';
import Home from './screens/PostUpload';
import StoryContainer from './screens/Components/ViewContainer';

export default function Routers() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"SignUp"}>
      {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
      {/* <Stack.Screen name="login" component={Login} /> */}
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="statusscreen" component={StatusScreen} />
      <Stack.Screen name="chatscreen" component={ChatScreen} />
      <Stack.Screen name="callsscreen" component={CallsScreen} />
      <Stack.Screen name="archivedscreen" component={ArchivedScreen} />
      <Stack.Screen name="profilescreen" component={ProfileScreen} />
      <Stack.Screen name="customsidebarmenu" component={CustomSidebarMenu} />
      <Stack.Screen name="storyContainer" component={StoryContainer} />
    </Stack.Navigator>

    </NavigationContainer>
 
  );
}


