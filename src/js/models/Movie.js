import axios from 'axios'

export default class Search {
  constructor(id) {
    this.id = id
  }

  async getMovie() {
    try {
      const apiKey = process.env.API_KEY

      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${this.id}&type=movie&plot=full`
      )
      this.title = res.data.Title
      this.director = res.data.Director
      this.genre = res.data.Genre
      this.plot = res.data.Plot
      this.poster = res.data.Poster
      this.ratings = res.data.Ratings
      this.released = res.data.Released
      this.runtime = res.data.Runtime
      this.year = res.data.Year
      this.imdbRating = res.data.imdbRating
    } catch (error) {
      console.log(error)
    }
  }
}
