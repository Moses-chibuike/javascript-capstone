import fetchMovieData from '../configurations/utilities.js';
import like from '../assets/likeIcon.png';

const list = document.getElementById('list');

const display = async () => {
  const data = await fetchMovieData();
  list.innerHTML = '';
  data.forEach(({ '#TITLE': title, '#IMG-POSTER': poster }) => {
    list.innerHTML += `
        <li>
            <div class="image-wrapper">
                <img src=${poster} alt="movie" class="poster-img">
            </div>
            <div class="info">
                <p>${title}</p> 
                <div class="like">
                    <div><img src=${like} alt="like"></div>
                    <p> 1 like </p>
                </div>   
            </div>
            <div>
                <button type="submit" class="Btn"> Comment </button>
            </div>
        </li>
        `;
  });
};

export default display;