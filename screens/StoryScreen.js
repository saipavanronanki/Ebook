// StoryScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const StoryScreen = ({ route }) => {
  const { storyId, storyTitle, storyContent, storyImage } = route.params;

  return (
    <View style={styles.container}>
      <Image source={storyImage} style={styles.storyImage} />
      <Text style={styles.storyTitle}>{storyTitle}</Text>
      <Text>{storyContent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  storyImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 8,
  },
  storyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default StoryScreen;
