const elms = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  errorText: document.querySelector('.error'),
  list: document.querySelector('.cat-info'),
};

function fetchBreeds() {
  fetch('https://api.thecatapi.com/v1/breeds')
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
}

fetchBreeds();
function fetchCat(breedId) {
  fetch(`https://api.thecatapi.com/v1/breeds/${breedId}`)
    .then(responce => {
      console.log(responce);
      if (!responce.ok) {
        throw new Error(responce.statusText);
      }
      return responce.json();
    })
    .then(data => console.log(data))
    // (elms.list.innerHTML = create(data)))

    .catch(error => {
      console.log(error);
    });
  elms.select.onchange = function () {
    let item = elms.select.value;
    console.log(item);
    fetchCat(item);
  };
  //   function create({ name, description, temperament }) {
  //     return `<div>
  //           <h2>${name}</h2>
  //           <p>${description}</p>
  //           <h3>Temperament: ${temperament}</h3>
  //         </div>`;
  //   }
}
fetchBreeds();

// function fetchCatByBreed(breed) {
//   fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`)
//     .then(responce => {
//       console.log(responce);
//       if (!responce.ok) {
//         throw new Error(responce.statusText);
//       }
//       return responce.json();
//     })
//     .then(data => (elms.list.innerHTML = createImage(data)))

//     .catch(error => {
//       console.log(error);
//     });
//   elms.select.onchange = function () {
//     let i = elms.select.value;
//     console.log(i);
//     fetchCatByBreed(i);
//   };
//   function createImage(arr) {
//     return arr
//       .map(({ id, url }) => `<img src="${url}" alt="${id}"width="500px">`)
//       .join('');
//   }
// }

// fetchCatByBreed();
// fetchCat();
