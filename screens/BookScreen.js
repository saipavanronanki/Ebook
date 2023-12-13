// BookScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const data = {
  'Book 1': [
    { id: '1', title: 'Story 1', content: 'Sample content for Story 1', image: require('../images/item1.jpg') },
    // Add more stories for Book 1 as needed
  ],
  'Book 2': [
    { id: '3', title: 'Story 3', content: 'Sample content for Story 3', image: require('../images/item1.jpg') },
    // Add more stories for Book 2 as needed
  ],
  'Novel 1': [
    { id: '5', title: 'Story 5', content: 'Sample content for Story 5', image: require('../images/item1.jpg') },
     // Add more stories for Novel 1 as needed
  ],
  'Novel 2': [
    { id: '7', title: 'Story 7', content: 'Sample content for Story 7', image: require('../images/item1.jpg') },
     // Add more stories for Novel 2 as needed
  ],
  // Add more books and stories as needed
};

const BookScreen = ({ route }) => {
  const { bookTitle } = route.params;

  const stories = data[bookTitle];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.storyItem}  >
      <Image source={item.image} style={styles.storyImage} />
      <Text style={styles.storyTitle}>{item.title}</Text>
      <Text>{item.content}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.bookTitle}>{bookTitle}</Text>
      <FlatList data={stories} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  storyItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
  },
  storyImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
  storyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookScreen;
