import '../css/main.scss'
import Search from './models/Search'
import Movie from './models/Movie'
import Likes from './models/Like'
import * as likeView from './views/likeView'
import * as searchView from './views/searchView'
import * as movieView from './views/movieView'
import {
  elements,
  renderLoader,
  clearLoader,
  clearUI,
} from './views/base'
import Like from './models/Like'

/** Global State of the app
 *  - Search Object
 *  - Current Film Object
 *  - Liked Movies
 *  - Watched Movies
 */

const state = {}

/** Search Controller */
const controlSearch = async (type, page) => {
  if (type === 'new') {
    const query = searchView.getInput()

    if (query) {
      // create new search object & add to state
      state.search = new Search(query)

      // prepare UI for results
      if (document.querySelector('.movie-display')) {
        const display = document.querySelector('.movie-display')
        const parent = display.parentElement
        parent.removeChild(display)
      }
      searchView.clearInput()
      searchView.clearResults()
      searchView.clearSearchTitle()
      renderLoader(elements.searchSection)
      try {
        // search for the movies
        await state.search.getResults()

        // render result to UI
        clearLoader()
        searchView.renderSearchTitle(query)
        searchView.renderResults(state.search)
      } catch (error) {
        console.log(error)
      }
    }
  } else if (type === 'used') {
    searchView.clearResults()
    renderLoader(elements.searchSection)
    try {
      await state.search.getResults(page)

      clearLoader()
      searchView.renderResults(state.search)
    } catch (error) {
      clearLoader()
      console.log(error)
    }
  }
}

/** Movie Controller */

const controlMovie = async id => {
  if (id) {
    state.movie = new Movie(id)

    searchView.clearResults

    try {
      await state.movie.getMovie()

      movieView.renderMovie(state.movie, state.likes.checkLiked(id))
    } catch (error) {
      console.log(error)
    }
  }
}

/** Like Controller */
state.likes = new Like()
const controlLike = () => {
  if (!state.likes) state.likes = new Like()

  const currentID = state.movie.id
  if (!state.likes.checkLiked(currentID)) {
    const newLike = state.likes.addLike(
      currentID,
      state.movie.poster,
      state.movie.title,
      state.movie.year
    )
    likeView.toggleLike(true)
    likeView.renderLikes(newLike)
  } else {
    state.likes.deleteLike(currentID)
    likeView.toggleLike(false)
  }
  likeView.toggleLikeMenu(state.likes.checkLikesLength())
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault()
  controlSearch('new')
})

elements.searchSection.addEventListener('click', e => {
  const movie = e.target.closest('.movie')
  const back = e.target.closest('.back-button')
  const like = e.target.closest('.like-button, .like-button *')

  if (like) {
    controlLike()
  }

  if (movie) {
    const movieId = movie.dataset.id
    clearUI()
    searchView.clearResults()
    searchView.clearSearchTitle()
    controlMovie(movieId)
  }

  if (back) {
    if (document.querySelector('.movie-display')) {
      const display = document.querySelector('.movie-display')
      const parent = display.parentElement
      parent.removeChild(display)
    }
    controlSearch('used', state.search.page)
  }
})

elements.likeIcon.addEventListener('mouseover', e => {
  elements.likePanel.style.display = 'block'
})

elements.movieGridContainer.addEventListener('mouseover', e => {
  elements.likePanel.style.display = 'none'
})



elements.buttonContainer.addEventListener('click', e => {
  const btn = e.target.closest('.button-pagination')
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10)
    controlSearch('used', goToPage)
  }
})
