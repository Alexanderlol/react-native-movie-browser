import React from 'react'
import { Image, Button, TouchableHighlight, FlatList, View, TextInput, ScrollView, Text, StyleSheet } from 'react-native';
import { fetchMovies } from '../data'

export default class MainRouteComponent extends React.Component {
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