// StoryScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const StoryScreen = ({ route }) => {
  const { story } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{story.title}</Text>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.content}>{story.content}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

export default StoryScreen;
