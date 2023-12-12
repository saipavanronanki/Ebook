import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProfileScreen = () => {
  return (
    <View style={styles.container} >
        <Text style={styles.text} >ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen

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
        color: 'red'
    }
  });