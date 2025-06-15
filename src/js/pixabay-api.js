import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '50846905-dc608c04a9f845ecec04912aa';
const URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      const hits = response.data.hits;
      if (hits.length < 1) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: '#E0F7FA', 
            messageColor: '#006064',
        });
        return [];
      }
      return hits;
    })
    .catch(error => {
      iziToast.show({
        message: `Error: ${error.message}`,
        backgroundColor: 'rgba(255, 0, 0, 0.9)',
        messageColor: 'black',
      });
      return [];
    });
}