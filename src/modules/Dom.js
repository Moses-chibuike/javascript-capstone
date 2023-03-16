import ht2 from '../images/heart2.png';
import { getLikes } from './api.js';
import getTotalPaintings from './itemsCounter.js';

let stringPaintings = '';
let idKey;

const URL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=Auguste+Renoir&showOnly=openAccess%7CwithImage%7ConDisplay&isPublicDomain=true&hasImages=true';

const loadData = async () => {
  const request = new Request(URL);
  const response = await fetch(request);
  const data = await response.json();
  const IDs = data.objectIDs;
  idKey = await getLikes();
  IDs.forEach((element) => {
    const readIds = async (element) => {
      const gallery = document.querySelector('.gallery');
      const request = new Request(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`,
      );
      const response = await fetch(request);
      const data = await response.json();
      stringPaintings += `<div class="grid-item">  <!-- container for each painting-->
                                    <div class="paintings">
                                      <div class="paintingContainer" >
                                        <img class="painting" src= '${data.primaryImageSmall}' alt="PAINTING IMAGE">
                                        </div>
                                        <div class="paint-name">
                                        <p class"tet">${data.title}</p>
                                        <span class="like" ><img class="heart" id="h${data.objectID}" src="${ht2}" alt="Likes(${idKey[data.objectID]}" width="15" height="15" srcset="" name="heart"  alt="Likes(${idKey[data.objectID]})"></span> 
                                        </div>         
                                      
                                      <div class="likes">
                                          <span class="likes-count"><span id="spl${data.objectID}">Likes(${idKey[data.objectID]})</span></span>
                                      </div>
                                      <div>
                                        <button id="${data.objectID}" class="bComments" value="Comments" >Comments</button>                            
                                      </div>
                                  </div>
                                </div>`;
      gallery.innerHTML = stringPaintings;
      getTotalPaintings();
    };
    readIds(element);
  });
};

export default loadData;