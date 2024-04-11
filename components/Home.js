// Home.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Alert, Picker } from 'react-native';
import Footer from './Footer';
import Item1 from './item1';

const Home = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Coats'); // Default category
  const [sortType, setSortType] = useState('Name'); // Default sorting type

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (type) => {
    setSortType(type);
  };

  const handleAddToCart = (item) => {
    console.log('Add to Cart button pressed');
    setCartItems([...cartItems, item]);
    Alert.alert('Item added to cart!');
  };

  const handleBuyNow = () => {
    console.log('Buy button pressed');
    if (cartItems.length === 0) {
      Alert.alert('Your cart is empty. Add items to proceed.');
    } else {
      navigation.navigate('Checkout', { cartItems });
    }
  };

  // Group items by category
  const categories = {
    'Coats': [
      { name: 'BURBERRY TRENCH COAT - 2XL BEIGE POLYESTER BLEND', image: require('../assets/item1.jpg'), price: '₱10,500.00', description: 'Vintage beige Burberry trench coat, fits xx-large.', components: 'item1' },
      { name: 'BURBERRY TRENCH COAT - 2XL KHAKI POLYESTER BLEND', image: require('../assets/item2.jpg'), price: '₱9,900.00', description: 'Vintage khaki Burberry trench coat, fits xx-large.', components: 'item2' },
    ],
    'Jackets': [
      { name: 'CARL EDWARDS CFS NASCAR JACKET - LARGE BLACK COTTON', image: require('../assets/item3.jpg'), price: '₱9,900.00', description: 'Vintage Carl Edwards black Cfs jacket, fits large.', components: 'item3' },
      { name: 'BILL ELLIOTT 9 COMPETITORS VIEW NASCAR JACKET - 2XL RED COTTON', image: require('../assets/item4.jpg'), price: '₱8,600.00', description: 'Vintage Bill Elliott 9 red Competitors View jacket, fits xx-large.', components: 'item4' },
    ],
  };

  // Sort items based on selected sorting type
  const sortedItems = categories[selectedCategory].sort((a, b) => {
    if (sortType === 'Name') {
      return a.name.localeCompare(b.name);
    } else if (sortType === 'Price') {
      return parseFloat(a.price.replace('₱', '').replace(',', '')) - parseFloat(b.price.replace('₱', '').replace(',', ''));
    }
    // Add more sorting types if needed
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/logo_transparent.png')} style={styles.logo} />
        <Text style={styles.header}>Welcome to our Store!</Text>
      </View>
      {/* Category Menu */}
      <View style={styles.menuContainer}>
        {Object.keys(categories).map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.menuItem,
              selectedCategory === category && styles.selectedMenuItem,
            ]}
            onPress={() => handleCategoryChange(category)}
          >
            <Text style={styles.menuItemText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Sorting Dropdown */}
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Sort by:</Text>
        <Picker
          selectedValue={sortType}
          style={styles.dropdownPicker}
          onValueChange={(itemValue) => handleSortChange(itemValue)}
        >
          <Picker.Item label="Name" value="Name" />
          <Picker.Item label="Price" value="Price" />
        </Picker>
      </View>
      {/* Display sorted items based on selected category */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>{selectedCategory}</Text>
        <View style={styles.menuContainer}>
          {sortedItems.map((item) => (
            <TouchableOpacity 
              key={item.name} 
              style={styles.menuItem} 
              onPress={() => navigation.navigate(item.component)} // Navigate to the corresponding component file
            >
              <Image source={item.image} style={styles.menuItemImage} />
              <Text style={styles.menuItemText}>{item.name}</Text>
              <Text style={styles.menuItemPrice}>{item.price}</Text>
              <Text style={styles.menuItemDescription}>{item.description}</Text>
              <TouchableOpacity onPress={() => handleAddToCart(item)}>
                <Text style={styles.addToCartButton}>Add to Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleBuyNow}>
                <Text style={styles.buyButton}>Buy</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('landingpage')}>
        <Text style={styles.logoutButton}>Log out</Text>
      </TouchableOpacity>
      <Footer />
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
    justifyContent: 'center',
    marginBottom: 20,
  },
  menuItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#E6E6E6',
    marginHorizontal: 5,
  },
  selectedMenuItem: {
    backgroundColor: '#335A02',
  },
  menuItemText: {
    color: '#335A02',
    fontWeight: 'bold',
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
    color: 'black',
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
  addToCartButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginTop: 10,
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: '#33CC33',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginTop: 10,
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
    marginBottom: 20, // Add marginBottom here
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dropdownLabel: {
    fontSize: 16,
    marginRight: 10,
    color: '#335A02',
  },
  dropdownPicker: {
    flex: 1,
    height: 40,
    color: '#335A02',
  },
});

export default Home;
