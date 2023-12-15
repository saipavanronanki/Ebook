// CategoryScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const data = {
  'Katha (కథ)': [
    { id: '1', title: 'విక్రమార్కుడు మరియు బేతాళు', image: require('../images/item1.jpg') },
    { id: '2', title: 'Book 2', image: require('../images/item2.jpg') },
    // Add more science fiction books as needed
  ],
  'Prerana (ప్రేరణ)': [
    { id: '3', title: 'Novel 1', image: require('../images/item3.jpg') },
    { id: '4', title: 'Novel 2', image: require('../images/item4.jpg') },
    // Add more novel books as needed
  ],
  
  'Mythological Stories (పౌరాణిక కథలు)': [
    { id: '5', title: 'Novel 1', image: require('../images/item3.jpg') },
    { id: '6', title: 'Novel 2', image: require('../images/item4.jpg') },
    // Add more novel books as needed
  ],
  'Historical Stories (చరిత్ర కథలు)': [
    { id: '7', title: 'Novel 1', image: require('../images/item3.jpg') },
    { id: '8', title: 'Novel 2', image: require('../images/item4.jpg') },
    // Add more novel books as needed
  ],
  'Detective Stories (డిటెక్టివ్ కథలు)': [
    { id: '9', title: 'Novel 1', image: require('../images/item3.jpg') },
    { id: '10', title: 'Novel 2', image: require('../images/item4.jpg') },
    // Add more novel books as needed
  ],






  // Add more categories and books as needed
};

const CategoryScreen = ({ route, navigation }) => {
  const { categoryName } = route.params;

  const books = data[categoryName];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() => navigation.navigate('Book', { bookTitle: item.title })}
    >
      <Image source={item.image} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{categoryName}</Text>
      <FlatList data={books} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bookItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
  },
  bookImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryScreen;
