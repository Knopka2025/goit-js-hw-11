import axios from 'axios';

const API_KEY = '50846905-dc608c04a9f845ecec04912aa';

export default function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios(`https://pixabay.com/api/?${params}`);
}