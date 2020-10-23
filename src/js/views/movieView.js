import { elements } from './base'

export const renderMovie = (movie, isLiked, fromMenu) => {
  if (movie) {
    let markup
    if (movie.img === 'N/A') {
      markup = `
            <div class="movie-display">
            <div class="display-poster"><img src="https://cdn.browshot.com/static/images/not-found.png" alt="movie-poster"></div>
            <div class="display-information">
              <h1 class="movie-title">${movie.title}</h1>
              <div class="movie-details">
                <ul class="details">
                  <li><i class="icon fa fa-calendar"></i>${
        movie.released === 'N/A' || !movie.released
          ? 'Unavailable'
          : movie.released
        }</li>
                  <li><i class="icon fa fa-film"></i>${
        movie.director === 'N/A' || !movie.director
          ? 'Unavailable'
          : movie.director
        }</li>
                  <li><i class="icon fa fa-clock-o"></i>${
        movie.runtime === 'N/A' || !movie.runtime
          ? 'Unavailable'
          : movie.runtime
        }</li>
                  <li><i class="icon fa fa-star"></i>${
        movie.imdbRating === 'N/A' || !movie.imdbRating
          ? 'Unavailable'
          : movie.imdbRating
        }</li>
                </ul>
              </div>
              <p class="plot">${
        movie.plot === 'N/A' || !movie.plot
          ? 'Plot unavailable.'
          : movie.plot
        }
              </p>
              <div class="button-details">
                <button class="imdb-button" onclick="location.href=${`https://www.imdb.com/title/${movie.id}`}>IMDB ${
        movie.imdbRating === 'N/A' || !movie.imdbRating
          ? 'Unavailable'
          : movie.imdbRating
        }</button>
                <div class="liked-buttons">
                  <button class="like-button"><i class="fa fa-check"></i></button>
                </div>
              </div>
              <button class="back-button"><i class="fa fa-backward"/>Back</button>
            </div>
          </div>
            `
    } else {
      markup = `
        <div class="movie-display">
        <div class="display-poster"><img src=${
        movie.poster
        } alt="movie-poster"></div>
        <div class="display-information">
          <h1 class="movie-title">${movie.title}</h1>
          <div class="movie-details">
            <ul class="details">
              <li><i class="icon fa fa-calendar"></i>${
        movie.released === 'N/A' || !movie.released
          ? 'Unavailable'
          : movie.released
        }</li>
              <li><i class="icon fa fa-film"></i>${
        movie.director === 'N/A' || !movie.director
          ? 'Unavailable'
          : movie.director
        }</li>
              <li><i class="icon fa fa-clock-o"></i>${
        movie.runtime === 'N/A' || !movie.runtime
          ? 'Unavailable'
          : movie.runtime
        }</li>
              <li><i class="icon fa fa-star"></i>${
        movie.imdbRating === 'N/A' || !movie.imdbRating
          ? 'Unavailable'
          : movie.imdbRating
        }</li>
            </ul>
          </div>
          <p class="plot">${
        movie.plot === 'N/A' || !movie.plot
          ? 'Plot unavailable.'
          : movie.plot
        }
          </p>
          <div class="button-details">
            <button class="imdb-button" onclick="location.href='${`https://www.imdb.com/title/${movie.id}/`}'">IMDB ${
        movie.imdbRating === 'N/A' || !movie.imdbRating
          ? 'Unavailable'
          : movie.imdbRating
        }</button>
            <div class="liked-buttons">
              <button class="like-button ${
        isLiked ? 'liked' : ''
        }"><i class="fa fa-check"></i></button>
            </div>
          </div>
          <button class="back-button"> 
        <i class="fa fa-backward"></i>
          Back</button>
        </div>
      </div>
        `
    }
    elements.searchSection.insertAdjacentHTML('afterbegin', markup)
  }
}
