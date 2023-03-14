const fetchMovieData = async () => {
  const response = await fetch(URL); // import URL from another js folder with unique api
  const data = await response.json();
  const info = data.description;
  return info;
};

export default fetchMovieData;