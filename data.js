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

export const fetchRandom = async () => {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${randomMovie}`
    try {
        const response = await fetch(url)
        const results = await response.json()
        console.log(results)
        //const array = Object.entries(results)
        //results = results.concat(json.response)
        //console.log(array.map(processMovie))
        //return array.map(processMovie)
        //console.log(processMovie(results))
        //test = processMovie(results)
        return results
    } catch (err) {
        return console.log(err)
    }
}


/* 
export const fetchMovies = async (response) => {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${response}`
    try {
        const response = await fetch(url)
        const { Search, totalResults } = await response.json()
        const allMovies = Search
        // if more than 10 results, get rest of pages
        const numPages = Math.ceil(+totalResults / 10);
        for (const i = 2; i <= numPages && i <= MAX_PAGES; i++) {
            // (async function moreMovies() {
            const response = await fetch(url + `&page=${i}`)
            // const { Search } = await response.json()
            // console.log(`page ${i}:`)
            const json = await response.json()
            console.log('pushing to Search')
            allMovies = allMovies.concat(json.Search)
            // return Search
            // })
            // Search.push(moreMovies())
        }
        console.log('returning Search now')
        return allMovies.map(processMovie)
    } catch (err) {
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
} */