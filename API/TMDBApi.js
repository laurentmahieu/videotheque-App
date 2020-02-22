// API/TMDBApi.js

const API_TOKEN = "e8d495fefb36495c5eef1030d785d66f";

// Récupération des films
export function getFilmsFromApiWithSearchedText(text, page) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text +
    "&page=" +
    page;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));
}

// Récupération de l'image d'un film
export function getImageFromApi(name) {
  return "https://image.tmdb.org/t/p/w300" + name;
}

// Récupération du détail d'un film
export function getFilmDetailFromApi(id) {
  return fetch(
    "https://api.themoviedb.org/3/movie/" +
      id +
      "?api_key=" +
      API_TOKEN +
      "&language=fr"
  )
    .then(response => response.json())
    .catch(error => console.error(error));
}

//récupérer les détails des films les plus populaire
export function getPopularFilm() {
  return fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      API_TOKEN +
      "&language=fr&sort_by=popularity.desc"
  )
    .then(response => response.json())
    .catch(error => console.error(error));
}
