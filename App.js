import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createSwitchNavigator} from 'react-navigation'

class MainRouteComponent extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}> 
        <Button title="go to movie screen" 
                onPress={() => {
                  this.props.navigation.navigate('MovieRoute')
                }}/>
      </View>
    );
  }
}

class MovieRouteComponent extends React.Component {
  render() {
    return (
      <View style={styles.movieContainer}> 
        <Button title="go back" 
                onPress={() => {
                  this.props.navigation.navigate('MainRoute')
                  }
                }/>
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  "MainRoute": MainRouteComponent,
  "MovieRoute": MovieRouteComponent,
})

export default class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 25,
    borderColor: 'teal',
  },
  movieContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 25,
    borderColor: 'orange',
  },
});
