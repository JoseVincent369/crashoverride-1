import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Item1 = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/item1.jpg')} style={styles.image} />
      <Text style={styles.name}>BURBERRY TRENCH COAT - 2XL BEIGE POLYESTER BLEND</Text>
      <Text style={styles.price}>₱10,500.00</Text>
      <Text style={styles.description}>Vintage beige Burberry trench coat, fits xx-large.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Item1;
