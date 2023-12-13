// DetailsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { title, image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text>{title}</Text>
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
    width: '100%',
    height: '80%', // Adjust the height based on your design
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
});

export default DetailsScreen;
