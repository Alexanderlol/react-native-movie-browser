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
      
      componentDidMount() {
        this.getRandomMovie(this.props.navigation.getParam('id', 'n/a'))
      }

      getRandomMovie = async () => {
          const results = await fetchRandom()
          this.setState({movieInfo: results})
      }

     /*  componentDidMount() {
        this.getMoviesById(this.props.navigation.getParam('id', 'n/a'))
      }
    
      getMoviesById = async () => {
        const results = await fetchById()
        this.setState({movieInfo: results})
      } */
    render() {
        const { navigation } = this.props
        const title = navigation.getParam('title', 'N/A');
        const img = navigation.getParam('img', 'https://banner2.kisspng.com/20180216/kee/kisspng-photographic-film-reel-clip-art-movie-film-5a8677562304e0.0541516415187618141435.jpg');
        return (
            <View style={styles.movieContainer}> 
                <Button title="go back" 
                    onPress={() => {
                        this.props.navigation.navigate('MainRoute')
                        }
                    }/>
                <Image
                        style={styles.image}
                        source={{ uri: img }}
                        resizeMode='stretch'
                    />
                <Text>{title}</Text>
                    {this.state.movieInfo &&
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{this.state.movieInfo.Year}</Text>
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