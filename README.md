# Movie Library
## See the live version [here](https://dalebandoni.github.io/movie-library/)

#### This is a small movie library app that uses the [OMDb API](http://www.omdbapi.com/)

This project was built with HTML, CSS and Vanilla JS, it also uses Webpack and Babel.

To run this on your machine, clone the repository and run the following commands: 

**to run in development mode**
```
npm run dev
``` 

**to create a production build**
```
npm run build
``` 

**To make searches with the API, you need to get an API key for OMDb API and create a .env file, then add your API key as such**
```
API_KEY=yourapi
PROXY=https://cors-anywhere.herokuapp.com/
``` 

**Then in the Search model your API key will automatically be configured**
```
const apiKey = process.env.API_KEY
``` 
