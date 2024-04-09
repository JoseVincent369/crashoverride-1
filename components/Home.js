import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('landingpage');
  };

  // Group items by category
  const categories = {
    'Coats': [
      { name: 'BURBERRY TRENCH COAT - 2XL BEIGE POLYESTER BLEND', image: require('../assets/item1.jpg'), price: '₱10,500.00', description: 'Vintage beige Burberry trench coat, fits xx-large.' },
      { name: 'BURBERRY TRENCH COAT - 2XL KHAKI POLYESTER BLEND', image: require('../assets/item2.jpg'), price: '₱9,900.00', description: 'Vintage khaki Burberry trench coat, fits xx-large.' },
    ],
    'Jackets': [
      { name: 'CARL EDWARDS CFS NASCAR JACKET - LARGE BLACK COTTON', image: require('../assets/item3.jpg'), price: '₱9,900.00', description: 'Vintage Carl Edwards black Cfs jacket, fits large.' },
      { name: 'BILL ELLIOTT 9 COMPETITORS VIEW NASCAR JACKET - 2XL RED COTTON', image: require('../assets/item4.jpg'), price: '₱8,600.00', description: 'Vintage Bill Elliott 9 red Competitors View jacket, fits xx-large.' },
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/logo_transparent.png')} style={styles.logo} />
        <Text style={styles.header}>Welcome to our Store!</Text>
      </View>
      {/* Display items by category */}
      {Object.entries(categories).map(([category, items]) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <View style={styles.menuContainer}>
            {items.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.menuItem} 
                onPress={() => navigation.navigate(item.name)}
              >
                <Image source={item.image} style={styles.menuItemImage} />
                <Text style={styles.menuItemText}>{item.name}</Text>
                <Text style={styles.menuItemPrice}>{item.price}</Text>
                <Text style={styles.menuItemDescription}>{item.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutButton}>Log out</Text>
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
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#335A02',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '48%',
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
  menuItemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  menuItemText: {
    color: '#335A02',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuItemPrice: {
    color: '#335A02',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  menuItemDescription: {
    color: '#335A02',
    fontSize: 14,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#335A02',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    color: '#FFFFFF',
    marginTop: 20,
  },
});

export default Home;
