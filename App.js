// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../Ebook/screens/HomeScreen';
import CategoryScreen from '../Ebook/screens/CategoryScreen';
import BookScreen from '../Ebook/screens/BookScreen';
import StoryScreen from '../Ebook/screens/StoryScreen';
import SettingsScreen from '../Ebook/screens/SettingsScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();



const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen  name="App" component={HomeScreen} />
    <Stack.Screen name="Category" component={CategoryScreen} />
    <Stack.Screen name="Book" component={BookScreen} />
  </Stack.Navigator>
);


const App = () => {
  return (
    <NavigationContainer  style={{height:10,}}>
      <Tab.Navigator >
        <Tab.Screen options={{headerShown: false ,tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={"blue"} size={28} />
      ),showIcon: true}}  name="Home" component={HomeStack}     />
       
       
        <Tab.Screen options={{headerShown: false,tabBarLabel: 'Settings',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="cog" color={"blue"} size={30} />
      ),showIcon: true}}  name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
