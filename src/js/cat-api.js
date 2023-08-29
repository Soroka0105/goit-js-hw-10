import { create, createMarkUp, elms } from './app';
export { fetchCatByBreed, fetchBreeds };

fetchBreeds = function () {
  fetch(`${elms.BASE_URL}/breeds/`)
    .then(responce => {
      console.log(responce);
      if (!responce.ok) {
        throw new Error(responce.statusText);
      }
      return responce.json();
    })
    .then(data => (elms.select.innerHTML = createMarkUp(data)))
    .catch(error => {
      console.log(error);
    });
};

fetchCatByBreed = function (breedId) {
  fetch(
    `${elms.BASE_URL}/images/search?breed_ids=${breedId}&api_key=${elms.APIkey}`
  )
    .then(responce => {
      console.log(responce);
      if (!responce.ok) {
        throw new Error(responce.statusText);
      }
      return responce.json();
    })
    .then(
      data => (elms.list.innerHTML = create(data[0])),
      elms.errorText.classList.replace('error', 'error-hiden'),
      console.log(elms.select.value)
    )

    .catch(error => {
      console.log(error);
      elms.errorText.classList.replace('error-hiden', 'error');
    });
};
