export function createMarkUp(arr) {
  elms.select.classList.replace('breed-select', 'breed-select-visible');
  elms.loader.classList.replace('loader', 'loader-hiden');
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}
export function create(obj) {
  elms.loader.classList.replace('loader', 'loader-hiden');
  elms.list.classList.replace('cat-info-hiden', 'cat-info');
  return `<div>
            <h2>${obj.breeds[0].name}</h2>
            <p>${obj.breeds[0].description}</p>
            <h3>Temperament: ${obj.breeds[0].temperament}</h3>
          </div>
          <div><img src="${obj.url}" alt="${obj.breeds[0].name}" width="500px" height="500px"></div>`;
}
export const elms = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  errorText: document.querySelector('.error-hiden'),
  list: document.querySelector('.cat-info'),
  APIkey:
    'live_5GOq6uH27v6jwTh5Yr3LAXJWqhClMJegkdGVZbz9JKDKQiltHl2IfZ5hnAIcvAbx',
  BASE_URL: 'https://api.thecatapi.com/v1',
};

// export { elms, create, createMarkUp };
