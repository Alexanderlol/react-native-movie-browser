import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createSwitchNavigator} from 'react-navigation'
import MainRouteComponent from './screens/Main.js'
import MovieRouteComponent from './screens/Movies.js'

const AppNavigator = createSwitchNavigator({
  "MainRoute": MainRouteComponent,
  "MovieRoute": MovieRouteComponent,
})

export default class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}

