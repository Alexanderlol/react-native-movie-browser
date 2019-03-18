import React from 'react';
import { StyleSheet, List, Text, View, Button } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import MainRouteComponent from './screens/Main.js'
import MovieRouteComponent from './screens/Movies.js'

const AppNavigator = createStackNavigator({
  "MainRoute": MainRouteComponent,
  "MovieRoute": MovieRouteComponent,
})

export default class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}

