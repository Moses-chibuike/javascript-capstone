import './style.css';
import { closePopUp, openComments } from './modules/comments_popup.js';
import loadData from './modules/Dom.js';
import { likeArts } from './modules/api.js';

const popUpCommentsContainer = document.querySelector('.containerCommentsPopUp');

const gallery = document.querySelector('.gallery');

loadData();

gallery.addEventListener('click', (event) => {
  const { target } = event;
  if (target.value === 'Comments') {
    openComments(target.id);
  } else if (target.name === 'heart') {
    const idlike = target.id;
    const idlikefiltered = idlike.replace(/^\D+/g, '');
    likeArts(idlikefiltered);
    let numlikes = Number(target.alt.replace(/^\D+/g, ''));
    numlikes += 1;
    const likecontainer = document.getElementById(`spl${idlikefiltered}`);
    likecontainer.innerHTML = `Likes(${numlikes})`;
  }
});

popUpCommentsContainer.addEventListener('click', (event) => {
  const { target } = event;
  if (target.id === 'xclose') {
    closePopUp(popUpCommentsContainer);
  }
});
