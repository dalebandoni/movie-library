import { elements } from './base'

export const getInput = () => elements.searchInput.value

export const clearInput = () => {
  elements.searchInput.value = ''
}

export const clearSearchTitle = () => {
  elements.titleContainer.innerHTML = ''
}

export const clearResults = () => {
  elements.movieGridContainer.innerHTML = ''
  elements.buttonContainer.innerHTML = ''
}

const renderTitle = title => {
  const markup = `
    <h1 class="result-title">Search results for: ${title}</h1>
    `
  elements.titleContainer.insertAdjacentHTML('beforeend', markup)
}

const renderMovie = movie => {

  const markup = `
        <div class="movie" data-id="${movie.imdbID}">
       
        <img class="${movie.Poster === 'N/A' ? 'no-poster' : ''}" src=${movie.Poster === 'N/A' ? 'https://cdn.browshot.com/static/images/not-found.png' : movie.Poster} alt="movie-poster" />
        
             <div class="movie-details">
                    <h1 class="movie-title">${movie.Title}</h1>
               </div>
        </div>
    `
  elements.movieGridContainer.insertAdjacentHTML('beforeend', markup)
}

const createButton = (page, type) => `
<button class="button button-pagination" data-goto=${
  type === 'prev' ? page - 1 : page + 1
  }>
    <i class="fa fa-${type === 'prev' ? 'backward' : 'forward'}">
    </i> Page ${type === 'prev' ? page - 1 : page + 1}
    </button>
       `

const renderButtons = (page, numResults) => {
  const pages = Math.ceil(numResults / 10)
  let button
  if (page === 1 && pages > 1) {
    //only button to next page
    button = createButton(page, 'next')
  } else if (page < pages) {
    button = `
    ${createButton(page, 'prev')}
    ${createButton(page, 'next')}
    `
  } else if (page === pages && pages > 1) {
    //only button to go previous
    button = createButton(page, 'prev')
  }
  elements.buttonContainer.insertAdjacentHTML('afterbegin', button)
}

export const renderResults = (movies) => {
  movies.result.Search.forEach(movie =>
    renderMovie(movie)

  )

  renderButtons(movies.page, movies.result.totalResults)
}

export const renderSearchTitle = title => {
  renderTitle(title)
}
