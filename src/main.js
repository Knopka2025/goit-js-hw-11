import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  clearGallery();
  showLoader();
  let input = event.target.elements['search-text'].value;
  getImagesByQuery(input)
    .then(images => {
      if (images.length > 0) {
        createGallery(images);
      }
    })
    .finally(() => hideLoader());
}