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

export default likeArts;