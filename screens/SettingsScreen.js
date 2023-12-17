// SettingsScreen.js
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity ,Share } from 'react-native';

import Rate, { AndroidMarket } from 'react-native-rate';


const SettingsScreen = ({ navigation }) => {
  const shareApp = async () => {
    try {
      await Share.share({
        message: 'Check out this awesome app!', // You can customize the message
      });
    } catch (error) {
      console.error('Error sharing the app:', error.message);
    }
  };

  const openPlayStoreForRating = () => {
    const options = {
      GooglePackageName: 'com.google.android.apps.playconsole', // Replace with your app's package name
      preferredAndroidMarket: AndroidMarket.Google,
      preferInApp: false,
    };

    Rate.rate(options, (success) => {
      if (success) {
        console.log('User rated the app');
      } else {
        console.log('User did not rate the app');
      }
    });
  };


  return (
    <View style={styles.container}>
         <TouchableOpacity onPress={shareApp}>
        <Text style={styles.link}>Share App</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
        <Text style={styles.link}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
        <Text style={styles.link}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={openPlayStoreForRating}>
        <Text style={styles.link}>Rate Us on Play Store</Text>
      </TouchableOpacity>
      {/* Add more options as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  link: {
    fontSize: 22,
    color: 'blue',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },

});

export default SettingsScreen;
