import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigation, StackView} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import StarMapScreen from "StarMap.js"
import SpaceCraftScreen from "SpaceCrafts.js"
import DailyPicScreen from "DailyPic.js"
import HomeScreen from "Home.js"

const stack = createStackNavigation()

export default function App() {
  return (
<NavigationContanier>
<Stack.Navigator initialRouteName="home" screenOptions ={{
  headerShow: false
}}>
  <Stack.Screen name = "home" component = {HomeScreen}/>
  <Stack.Screen name = "Daily pictures" component = {DailyPicScreen}/>
  <Stack.Screen name = "Space craft" component = {SpaceCraftScreen}/>
  <Stack.Screen name = "Star map" component = {StarMapScreen}/>
  </Stack.Navigator> 
</NavigationContanier>

    
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
