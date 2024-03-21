import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const Dashboard = ({ navigation }) => {
  const handleLogout = () => {
    // Clear any user data or authentication tokens here
    navigation.replace('Landing'); // Replace the current screen with the landingpage screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/logo_transparent.png')} style={styles.logo} />
        <Text style={styles.header}>Welcome to Your Dashboard</Text>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Item1')}>
          <Text style={styles.menuItemText}>Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Item2')}>
          <Text style={styles.menuItemText}>Item 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Item3')}>
          <Text style={styles.menuItemText}>Item 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Item4')}>
          <Text style={styles.menuItemText}>Item 4</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#335A02',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuItem: {
    width: '48%', // Adjust the width as per your preference
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
  menuItemText: {
    color: '#335A02',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#335A02',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Dashboard;

