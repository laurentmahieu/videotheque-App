const API_TOKEN = "e8d495fefb36495c5eef1030d785d66f";

export function getFilmsFromApiWithSearchText(text) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key" +
    API_TOKEN +
    "&language=fr&query=" +
    text;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));
}
