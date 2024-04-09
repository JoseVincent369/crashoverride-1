import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AboutUs = () => {
  // Define data for three persons
  const persons = [
    {
      name: 'Jose Vincent B. Pelaje',
      position: 'CEO',
      image: require('../assets/pelaje.jpg'),
      bio: 'Jose is the CEO of our company. With over 10 years of experience in the industry, he leads our team with passion and expertise.'
    },
    {
      name: 'Lloyd Earnest A. Taburno',
      position: 'CTO',
      image: require('../assets/lloyd.jpg'),
      bio: 'Lloyd serves as our Chief Technology Officer. She is a tech enthusiast and a visionary leader, driving innovation in our products.'
    },
    {
      name: 'Jeal L. Labarro',
      position: 'CFO',
      image: require('../assets/jeal.jpg'),
      bio: 'Jeal is our Chief Financial Officer. He brings extensive financial acumen to the table, ensuring the fiscal health of our company.'
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Meet Our Team</Text>
      {/* Render each person's information */}
      {persons.map((person, index) => (
        <View key={index} style={styles.personContainer}>
          <Image source={person.image} style={styles.image} />
          <Text style={styles.name}>{person.name}</Text>
          <Text style={styles.position}>{person.position}</Text>
          <Text style={styles.bio}>{person.bio}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  personContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  position: {
    fontSize: 16,
    marginBottom: 5,
  },
  bio: {
    textAlign: 'center',
  },
});

export default AboutUs;
