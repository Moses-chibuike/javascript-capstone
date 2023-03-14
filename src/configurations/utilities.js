const fetchMovieData = async () => {
  const response = await fetch(URL); // import URLMOVIES from another js folder with unique api
  const data = await response.json();
  const info = data.description;
  return info;
};

const fetchLikes = async () => {
  const response = await fetch(URL); // import LIKESURL from another js folder with unique api
  const data = await response.json();
  return data;
};
export { fetchMovieData, fetchLikes };