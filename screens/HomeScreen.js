// HomeScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const data = [
  { id: '1', name: 'Science Fiction', image: require('../images/item2.jpg') },
  { id: '2', name: 'Novel', image: require('../images/item3.jpg') },
  // Add more categories as needed
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('Category', { categoryName: item.name })}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
