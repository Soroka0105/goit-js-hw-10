const fetchBreeds = function () {
  fetch(`${elms.BASE_URL}/breeds`)
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
  function createMarkUp(arr) {
    return arr
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join('');
  }
};

const fetchCatByBreed = function (breedId) {
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
      elms.errorText.classList.replace('error', 'error-hiden')
    )

    .catch(error => {
      console.log('error');
      elms.errorText.classList.replace('error-hiden', 'error');
    });

  elms.select.onchange = function () {
    let item = elms.select.value;
    console.log(item);
    fetchCatByBreed(item);
    elms.loader.classList.replace('loader-hiden', 'loader');
  };

  function create(obj) {
    elms.loader.classList.replace('loader', 'loader-hiden');
    return `<div>
            <h2>${obj.breeds[0].name}</h2>
            <p>${obj.breeds[0].description}</p>
            <h3>Temperament: ${obj.breeds[0].temperament}</h3>
          </div>
          <div><img src="${obj.url}" alt="${obj.breeds[0].name}" width="500px" height="500px"></div>`;
  }
};

const elms = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader-hiden'),
  errorText: document.querySelector('.error-hiden'),
  list: document.querySelector('.cat-info'),
  APIkey:
    'live_5GOq6uH27v6jwTh5Yr3LAXJWqhClMJegkdGVZbz9JKDKQiltHl2IfZ5hnAIcvAbx',
  BASE_URL: 'https://api.thecatapi.com/v1',
};

export { fetchCatByBreed, fetchBreeds, elms };
