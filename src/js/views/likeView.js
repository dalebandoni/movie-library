import { elements } from './base'

export const toggleLike = isLiked => {
  const likeClass = isLiked ? 'liked' : ''
  const button = document.querySelector('.like-button')

  if (isLiked === true) {
    button.classList.add(`${likeClass}`)
  } else if (isLiked === false) {
    button.classList.remove('liked')
  }
}

export const toggleLikeMenu = numLikes => {
  elements.likeIcon.style.display = numLikes > 0 ? 'block' : 'none'
}

export const renderLike = like => {
  if (like) {
    const markup = `
        <li class="like-item" data=id=${like.id}>
              <img src="${like.img}" alt="movie-img">
              <div class="like-info">
                <span class="like-title">${like.title}</span>
                <span class="like-year">${like.year}</span>
              </div>
            </li>
        `
    elements.likePanel.insertAdjacentHTML('afterbegin', markup)
  }
}

export const renderLikes = like => {
  const markup = `
            <li class="like-item" href=${like.id}>
              <img src="${like.img}" alt="like-image">
              <div class="like-info">
                <span class="like-title">${like.title}</span>
                <span class="like-year">${like.year}</span>
              </div>
            </li>
    `
  elements.likePanel.insertAdjacentHTML('beforeend', markup)
}

export const deleteLike = id => {
  const el = document.querySelector(`.like-item[href*="${id}"]`).parentElement
  if (el) el.parentElement.removeChild(el)
}
