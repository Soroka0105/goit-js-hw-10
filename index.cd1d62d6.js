const e={select:document.querySelector(".breed-select"),loader:document.querySelector(".loader-hiden"),errorText:document.querySelector(".error-hiden"),list:document.querySelector(".cat-info"),APIkey:"live_5GOq6uH27v6jwTh5Yr3LAXJWqhClMJegkdGVZbz9JKDKQiltHl2IfZ5hnAIcvAbx",BASE_URL:"https://api.thecatapi.com/v1"};$c4ebbd28ee7007ee$export$913382e0b15b5503=function(){fetch(`${e.BASE_URL}/breeds/`).then((e=>{if(console.log(e),!e.ok)throw new Error(e.statusText);return e.json()})).then((r=>e.select.innerHTML=r.map((({id:e,name:r})=>`<option value="${e}">${r}</option>`)).join(""))).catch((e=>{console.log(e)}))},$c4ebbd28ee7007ee$export$57b7d3a597416aa2=function(r){fetch(`${e.BASE_URL}/images/search?breed_ids=${r}&api_key=${e.APIkey}`).then((e=>{if(console.log(e),!e.ok)throw new Error(e.statusText);return e.json()})).then((r=>{return e.list.innerHTML=(t=r[0],e.loader.classList.replace("loader","loader-hiden"),e.list.classList.replace("cat-info-hiden","cat-info"),`<div>\n            <h2>${t.breeds[0].name}</h2>\n            <p>${t.breeds[0].description}</p>\n            <h3>Temperament: ${t.breeds[0].temperament}</h3>\n          </div>\n          <div><img src="${t.url}" alt="${t.breeds[0].name}" width="500px" height="500px"></div>`);var t}),e.errorText.classList.replace("error","error-hiden"),console.log(e.select.value)).catch((r=>{console.log(r),e.errorText.classList.replace("error-hiden","error")}))},$c4ebbd28ee7007ee$export$913382e0b15b5503(),e.select.addEventListener("change",e.select.onchange),e.select.onchange=function(r){r.preventDefault();let t=e.select.value;$c4ebbd28ee7007ee$export$57b7d3a597416aa2(t),e.loader.classList.replace("loader-hiden","loader"),e.list.classList.replace("cat-info","cat-info-hiden")};
//# sourceMappingURL=index.cd1d62d6.js.map
