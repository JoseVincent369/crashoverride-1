import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.text}>For any inquiries or support, please reach out to us:</Text>
        <Text style={styles.text}>Email: contact@example.com</Text>
        <Text style={styles.text}>Phone: +1234567890</Text>
        <Text style={styles.text}>Address: 123 Main Street, City, Country</Text>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
