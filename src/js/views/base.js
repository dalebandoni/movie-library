export const elements = {
    searchForm: document.querySelector('.search-bar'),
    searchInput: document.querySelector('.search-field'),
    movieGridContainer: document.querySelector('.movie-container'),
    searchSection: document.querySelector('.results'),
    titleContainer: document.querySelector('.title-container'),
    buttonContainer: document.querySelector('.buttons'),
    movieDisplay: document.querySelector('.movie-display'),
    likePanel: document.querySelector('.likes-panel'),
    likeIcon: document.getElementById('like-icon')
}

export const elementStrings = {
    loader: 'loader'
}

export const clearMovieDisplay = () => {
    if (elements.movieDisplay) {
        const display = elements.movieDisplay
        const parent = display.parentElement
        parent.removeChild(display)
    }
}

export const clearUI = () => {
    elements.movieGridContainer.innerHTML = ''
}

export const renderLoader = parent => {
    const loader = `
    <div class="${elementStrings.loader}">
        <?xml version="1.0" encoding="utf-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background:#f7fafc; display: block; shape-rendering: auto;" width="187px" height="187px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" fill="#fff" stroke="#319795" stroke-width="7" r="32" stroke-dasharray="150.79644737231007 52.26548245743669">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.9090909090909091s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </circle>
    </div>
    `
    parent.insertAdjacentHTML('afterbegin', loader)
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`)
    if (loader) loader.parentElement.removeChild(loader)
}

