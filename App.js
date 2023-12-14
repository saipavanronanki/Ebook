// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Ebook/screens/HomeScreen';
import CategoryScreen from '../Ebook/screens/CategoryScreen';
import BookScreen from '../Ebook/screens/BookScreen';
import StoryScreen from '../Ebook/screens/StoryScreen';
import SettingsScreen from '../Ebook/screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Category" component={CategoryScreen} />
    <Stack.Screen name="Book" component={BookScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{headerShown: false}}  name="Home" component={HomeStack} />
        
       
        <Tab.Screen options={{headerShown: false}} name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
