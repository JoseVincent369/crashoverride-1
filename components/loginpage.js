import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Here you can implement your login logic, such as validating credentials
    console.log('Email:', email);
    console.log('Password:', password); // Check password in console
    navigation.navigate('Home'); // Navigate to the homepage
    // Implement your login logic here...
  };
  
  const handleSignUp = () => {
    navigation.navigate('Registration'); // Navigate to the registration page
  };

  const handleForgotPassword = () => {
    navigation.navigate('AccountRecovery'); // Navigate to the AccountRecovery screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo_transparent.png')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <MaterialIcons
                name={showPassword ? 'visibility-off' : 'visibility'}
                size={24}
                color="#000"
              />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword} onPress={handleForgotPassword}>Forgot Password?</Text>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150, 
    height: 150, 
    marginBottom: 10,
  },
  formContainer: {
    width: '80%',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#335A02',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
  forgotPassword: {
    color: 'black',
    textDecorationLine: 'underline',
    marginBottom: 10,
    textAlign: 'center',
  },
  signUpText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  signUpLink: {
    color: 'black',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default LoginPage;
