import React from 'react'
import { Image, Button, TouchableHighlight, FlatList, View, TextInput, ScrollView, Text, StyleSheet } from 'react-native';
import { fetchById } from '../data'
export default class MovieRouteComponent extends React.Component {
    state = {
        movieInfo: null,
      }
    
      componentDidMount() {
        this.getMoviesById(this.props.navigation.getParam('id', 'n/a'))
      }
    
      getMoviesById = async () => {
        const results = await fetchById()
        this.setState({movieInfo: results})
      }
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