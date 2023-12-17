// PrivacyScreen.js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PrivacyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Privacy</Text>
      <Text style={styles.description}>
        Our app respects your privacy. This is a detailed explanation of how we handle your data and ensure your privacy.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default PrivacyScreen;
