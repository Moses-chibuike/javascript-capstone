import { fetchMovieData, fetchLikes } from '../configurations/utilities.js';

const updateLikes = async () => {
    try {
      const data = await fetchLikes();
      data.forEach((item) => {
        const likeCount = document.getElementById(`count-${item.item_id}`);
        likeCount?.innerHTML = `${item.likes}`;
      });
    } catch (error) {
      throw new Error(`Error updating likes: ${error}`);
    }
  };
  

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
                   
                    <p id=count-${id}></p>
                </div>   
            </div>
            <div>
                <button type="submit" class="Btn"> Comment </button>
            </div>
        </li>
        `;
  });
    updateLikes();
};

export default display;