import { HARRYPORTERMOVIESURL, LIKESURL } from "./constVariables";

const fetchMovieData = async () => {
  const response = await fetch(HARRYPORTERMOVIESURL); 
  const data = await response.json();
  const info = data.description;
  return info;
};

const fetchLikes = async () => {
  const response = await fetch(LIKESURL);
  const data = await response.json();
  return data;
};
export { fetchMovieData, fetchLikes };