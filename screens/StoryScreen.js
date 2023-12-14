// StoryScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const StoryReadingScreen = ({ route }) => {
  const { title, content } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView>
        <Text style={styles.content}>{content}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
  },
});

export default StoryReadingScreen;
