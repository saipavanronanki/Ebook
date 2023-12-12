import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.container} >
        <Text style={styles.text} >HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

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