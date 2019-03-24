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

    movieTitle = ({ item }) => {
      return (
        <TouchableHighlight
          style= {styles.highlight} 
          underlayColor='white' 
          onPress={() => { this.props.navigation.navigate('MovieRoute', { title: item.title, id: item.imdbID }) }}
        >
          <View>
            <Text style={styles.title}>{item.Title}</Text>
          </View>
        </TouchableHighlight>
      )
  }

    render() {
      //const data = this.state.movies ? Object.entries(this.state.movies) : []
      var data = this.state.movies
      //var result = data ? Object.keys(data).map(key => ({ key, value: data[key] })) : []
      return (
        <View style={styles.mainContainer}> 
          <View style={styles.textArea}>
            <TextInput
            style = {styles.textInput}
            placeholder='enter movie to search for..'
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })} value={this.state.text}
            />
          </View>
            <FlatList
              style = {styles.flatList}
              data={data}
              renderItem={this.movieTitle}
              keyExtractor={(item) => item.Title + item.imdbID}
            />
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
    textArea: {
      backgroundColor: 'white',
      borderColor: 'teal',
      borderWidth: 4,
      borderRadius: 10,
      marginTop: 100,
      marginBottom: 50,
    },
    textInput: {
      backgroundColor: 'white',
      borderColor: 'teal',
      borderWidth: 1,
      width: 200,
      padding: 25,
      fontSize: 16,
    },
    flatList: {
      marginTop: 10,
      fontSize: 30,
      backgroundColor: 'white',
    },
    highlight: {
      backgroundColor: 'teal',
      padding: 5,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 5,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
  });