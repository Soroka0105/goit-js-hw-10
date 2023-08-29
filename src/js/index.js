import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { elms } from './app';

fetchBreeds();

elms.select.addEventListener('change', elms.select.onchange);
// fetchCatByBreed();
elms.select.onchange = function (event) {
  event.preventDefault();
  let item = elms.select.value;
  fetchCatByBreed(item);
  elms.loader.classList.replace('loader-hiden', 'loader');
  elms.list.classList.replace('cat-info', 'cat-info-hiden');
};
