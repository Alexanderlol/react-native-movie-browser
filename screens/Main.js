import React from 'react'
import { Image, Button, TouchableHighlight, FlatList, View, TextInput, ScrollView, Text, StyleSheet } from 'react-native';
import { fetchMovies } from '../data'

export default class MainRouteComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            movies: null,
        }
    }

    componentDidUpdate(prevState) {
        if (this.state.text !== prevState.text) {
          this.getSearch(this.state.text)
        }
      }

    getSearch = async (text) => {
        const results = await fetchMovies(text)
        this.setState({movies: results})
    }

    render() {
      return (
        <View style={styles.mainContainer}> 
            <TextInput
            placeholder='enter movie to search for..'
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })} value={this.state.text}
            />
            <Button title="go to movie screen" 
                  onPress={() => {
                    this.props.navigation.navigate('MovieRoute')
                  }}/>
            <Button title="test" 
                  onPress={() => {
                    console.log(this.state.movies)
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