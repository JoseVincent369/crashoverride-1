import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import landingpage from './components/landingpage';
import Registration from './components/Registration';
import loginpage from './components/loginpage';
import AccountRecovery from './components/AccountRecovery';
import Home from './components/Home';
import ContactUs from './components/ContactUs'; 
import AboutUs from './components/AboutUs'; 
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="landingpage">
        <Stack.Screen name="landingpage" component={landingpage} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="loginpage" component={loginpage} />
        <Stack.Screen name="Home" component={HomepageDrawer} options={{ headerShown: false }} />
        <Stack.Screen name="AccountRecovery" component={AccountRecovery} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const HomepageDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} options={{ headerShown: true }} />
      <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
      <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
    </Drawer.Navigator>
  );
}

// Define the Contact Us screen component
const ContactUsScreen = ({ navigation }) => {
  // Add your functionality for the Contact Us screen here
  return (
    <ContactUs navigation={navigation} />
  );
}

// Define the About Us screen component
const AboutUsScreen = ({ navigation }) => {
  // Add your functionality for the About Us screen here
  return (
    <AboutUs navigation={navigation} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
