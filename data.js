const API_KEY = '938ba536'
const MAX_PAGES = 20

//random test
var randomMovieArray = ['Star Wars', 'Game of Thrones', 'Lord of the Rings', 'Harry Potter'];
var randomNumber = Math.floor((Math.random() * randomMovieArray.length -1) + 1);
var randomMovie = randomMovieArray[randomNumber];
console.log(randomMovie)

const processMovie = (movie) => ({
    title: movie.Title,
    year: movie.Year,
    type: movie.Type,
    img: movie.Poster,
    imdbID: movie.imdbID
})

/* export const fetchRandom = async () => {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${randomMovie}`
    try {
        const response = await fetch(url)
        const results = await response.json()
        console.log(results)
        return results
    } catch (err) {
        return console.log(err)
    }
} */



export const fetchMovies = async (response) => {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${response}`
    try{
        const response = await fetch(url)
        const {Search} = await response.json()
        return Search
    } catch(err) {
        return console.log(err)
    }
}

export const fetchById = async (id) => {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    try {
        const response = await fetch(url)
        const results = await response.json()
        return results
    } catch (err) {
        return console.log(err)
    }
}  