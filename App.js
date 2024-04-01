import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import landingpage from './components/landingpage';
import Registration from './components/Registration';
import loginpage from './components/loginpage';
import AccountRecovery from './components/AccountRecovery';
import homepage from './components/homepage';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Landing">
        <Drawer.Screen name="landingpage" component={landingpage} />
        <Drawer.Screen name="Registration" component={Registration} />
        <Drawer.Screen name="loginpage" component={loginpage} />
        <Drawer.Screen name="homepage" component={homepage} />
        <Drawer.Screen name="AccountRecovery" component={AccountRecovery} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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
