const invAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aCIWbt6ixkSGou3TfOCc/likes';
const likeArts = async (id) => {
  const API_URL = invAPI;
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const getLikes = async () => {
    const API_URL = invAPI;
    const res = await fetch(API_URL);
    const data = await res.json();
    const objetc1 = {};
    data.forEach((element) => {
      if (element.likes !== 0) {
        objetc1[element.item_id] = element.likes;
      } else if (element.likes === undefined) {
        objetc1[element.item_id] = 0;
      }
    });
    return objetc1;
  };
  
export { likeArts, getLikes };