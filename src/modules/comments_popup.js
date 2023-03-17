import Xclose from '../images/close.svg';

const popUpCommentsContainer = document.querySelector('.containerCommentsPopUp');

const loadComments = async (container, id) => {
  const request = new Request(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aCIWbt6ixkSGou3TfOCc/comments?item_id=${id}`);
  const response = await fetch(request);
  const data = await response.json();
  const count = countData(data);
  const divCount = document.querySelector('.countComments');
  divCount.innerHTML = count;
  let string = '';
  data.forEach((element) => {
    string += `<li class="userComment">  ${element.creation_date} ${element.username} <i>said</i> &nbsp "${element.comment}"</li>`;
  });
  container.innerHTML = string;
  return count;
};

const addNewComment = async (idItem, username, comment) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aCIWbt6ixkSGou3TfOCc/comments';
  const containerComments = document.getElementById(`c${idItem}`);
  const user = username;
  const comment1 = comment;
  const dataToPost = {
    item_id: idItem,
    username: user,
    comment: comment1,
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToPost),
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  loadComments(containerComments, idItem);
};

const openComments = async (id) => {
  const link = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
  const request = new Request(link);
  const response = await fetch(request);
  const data = await response.json();
  const stringCommentPopup = `<article class="popUpComments" id=${data.objectID}>
                              <img id="xclose" class="xclose" src = "${Xclose}">
                              <section class="imageComments">
                                  <img src=${data.primaryImage} alt="" srcset="">
                              </section>
                              <section class ="detailsComments" >
                                  <p class="titleComments">${data.title}</p>
                                  <ul class="dataPaintingComments">
                                      <li>Year: ${data.accessionYear}</li>
                                      <li>Artist : ${data.artistDisplayName}</li>
                                      <li>Nationality : ${data.artistNationality}</li>
                                      <li>Medium : ${data.medium}</li>
                                  </ul>
                              </section>
                              <section class="divComments">
                                  <p class="countComments">Comments(0)</p>
                                  <ul class="listComments" id="c${data.objectID}">
                                  </ul>
                              </section>
                              <section class="addComment">
                                  <p>Add a comment</p>
                                  <form id="fc${data.objectID}" class="formComment" action="">
                                      <input class="username" type="text" name="" id="username" placeholder="Your name" required>
                                      <input class="comment" type="text" name="" id="comment" placeholder="Your insights" required>
                                      <button class="addCommentButton" type="submit">Comment</button>
                                  </form>
                              </section>
                          </article>`;
  popUpCommentsContainer.innerHTML = stringCommentPopup;
  popUpCommentsContainer.setAttribute('style', 'display: block');
  const containerComments = document.getElementById(`c${data.objectID}`);
  loadComments(containerComments, data.objectID);
  const formComments = document.querySelector(`#fc${data.objectID}`);
  formComments.addEventListener('submit', (e) => {
    e.preventDefault();
    const { username, comment } = formComments.elements;
    addNewComment(data.objectID, username.value, comment.value);
    formComments.reset();
  });
};

const closePopUp = (container) => {
  container.setAttribute('style', 'display: none');
};

export {
  Xclose, openComments, closePopUp, addNewComment, loadComments,
};