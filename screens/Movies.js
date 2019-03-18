import React from 'react'
import { Image, Button, TouchableHighlight, FlatList, View, TextInput, ScrollView, Text, StyleSheet } from 'react-native';
import { fetchById, fetchRandom } from '../data'
export default class MovieRouteComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieInfo: null
        }
    }
      // CANT FIGURE OUT HOW TO RENDER SEARCH TO MOVIE ROUTE
      // HOW DO THEY CONNECT?

      
      componentDidMount() {
        this.getMoviesById(this.props.navigation.getParam('id', 'n/a'))
      }
      getMoviesById = async (id) => {
        const results = await fetchById(id)
        this.setState({movieInfo: results})
      }
      /* getRandomMovie = async () => {
          const results = await fetchRandom()
          this.setState({movieInfo: results})
      } */

     /*  componentDidMount() {
        this.getRandomMovie()???????
      }
      */

    render() {
        return (
            <View style={styles.movieContainer}> 
                <Button title="go back" 
                    onPress={() => {
                        this.props.navigation.navigate('MainRoute')
                        }
                    }/>
                    {this.state.movieInfo &&
                        this.state.movieInfo.Poster ? (
                            <Image 
                            resizeMode="cover" 
                            source={{uri: this.state.movieInfo.Poster}} 
                            style={{height: 300, width: 300}}
                            />
                        ) : null
                    }
                    {this.state.movieInfo &&
                        <View>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                            {this.state.movieInfo.Title}</Text>
                            <Text style={{ fontSize: 16}}>{this.state.movieInfo.Year}</Text>
                            <Text>Genre: {this.state.movieInfo.Genre}</Text>
                            <Text>Rated: {this.state.movieInfo.Rated}</Text>
                            <Text>Released: {this.state.movieInfo.Released}</Text>
                            <Text>{this.state.movieInfo.Runtime}</Text>
                            <Text>{this.state.movieInfo.Director}</Text>
                            <Text style={{marginTop:10}}>{this.state.movieInfo.Actors}</Text>
                            <Text style={{marginTop:10, fontStyle: 'italic'}}>{this.state.movieInfo.Plot}</Text>
                        </View>
                    }
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