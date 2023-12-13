// HomeScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const data = [
  { id: '1', title: 'బాల సాహిత్యం కథ ', image: require('../images/item1.jpg') },
  { id: '2', title: 'బాల సాహిత్యం', image: require('../images/item2.jpg') },
  { id: '3', title: 'Item 3', image: require('../images/item3.jpg') },
  { id: '4', title: 'Item 3', image: require('../images/item3.jpg') },
  { id: '5', title: 'Item 3', image: require('../images/item3.jpg') },
  { id: '6', title: 'Item 3', image: require('../images/item3.jpg') },
  { id: '7', title: 'Item 3', image: require('../images/item3.jpg') },
  { id: '8', title: 'Item 3', image: require('../images/item3.jpg') },
  { id: '9', title: 'Item 3', image: require('../images/item3.jpg') },
  // Add more items as needed
];

const GridItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.gridItem} onPress={onPress}>
    <Image source={item.image} style={styles.image} />
    <Text>{item.title}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <GridItem
      item={item}
      onPress={() => navigation.navigate('Details', { title: item.title, image: item.image })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  gridItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    margin: 8,
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '80%', // Adjust the height based on your design
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
});

export default HomeScreen;
