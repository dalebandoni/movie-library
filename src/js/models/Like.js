export default class Like {
  constructor() {
    this.likes = []
  }

  addLike(id, img, title, year) {
    const like = {
      id,
      img,
      title,
      year,
    }

    this.likes.push(like)

    this.savetoLocal()

    return like
  }

  deleteLike(id) {
    const index = this.likes.findIndex(el => el.id === id)

    this.likes.splice(index, 1)

    this.savetoLocal()
  }

  checkLiked(id) {
    return this.likes.findIndex(el => el.id === id) !== -1
  }

  checkLikesLength() {
    return this.likes.length
  }

  savetoLocal() {
    localStorage.setItem('likedMovieLibrary', JSON.stringify(this.likes))
  }
}
