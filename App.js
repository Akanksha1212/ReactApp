import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeActivity from './components/HomeActivity';
import SecondActivity from './components/SecondActivity';

const RootStack = createStackNavigator(
{
  Home: { screen: HomeActivity },
  Second: { screen: SecondActivity },
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

