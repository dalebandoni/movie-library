import axios from 'axios'

export default class Search {
  constructor(query) {
    this.query = query
  }

  async getResults(page = 1) {
    const apiKey = process.env.API_KEY

    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${this.query}&type=movie&page=${page}
        `
      )
      this.result = res.data
      this.page = page

    } catch (error) {
      alert(error)
    }
  }
}
