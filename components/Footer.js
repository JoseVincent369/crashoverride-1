import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Connect with Us</Text>
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.socialIcon}>
          <Text style={styles.iconText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Text style={styles.iconText}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Text style={styles.iconText}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Text style={styles.iconText}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.copyRightText}>© 2024 CRASH OVERRIDE. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#335A02',
    paddingVertical: 15, // Adjusted padding here
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 16, // Adjusted font size
    fontWeight: 'bold',
    marginBottom: 5, // Adjusted margin
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 5, // Adjusted margin
  },
  socialIcon: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 5, // Adjusted padding
    paddingHorizontal: 10, // Adjusted padding
    borderRadius: 20,
  },
  iconText: {
    color: '#335A02',
    fontSize: 14, // Adjusted font size
    fontWeight: 'bold',
  },
  copyRightText: {
    color: '#FFFFFF',
    fontSize: 12, // Adjusted font size
  },
});

export default Footer;
