import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.text}>For any inquiries or support, please reach out to us:</Text>
      <Text style={styles.text}>Email: contact@example.com</Text>
      <Text style={styles.text}>Phone: +1234567890</Text>
      <Text style={styles.text}>Address: 123 Main Street, City, Country</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ContactUs;
