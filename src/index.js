import countries from "./country.json"
import galleryItemTpl from "./templates/gallery.handlebars"
const gallery = document.querySelector('.js-gallery')
galleryItemTpl(countries)
// function unpack(arr) {
//     return arr.map(({flag, name, capital, currency, language, population}) => {
//         return `
//         <li class="gallery__item">
//         <div class="gallery__thumb">
//           <img src="${flag}" alt="Прапор " width="320">
//         </div>
//         <h2>${name}</h2>
//         <p><b>Столиця: ${capital}</b></p>
//         <p><b>Валюта: ${currency}</b></p>
//         <p><b>Офиційна мова: ${language}</b> </p>
//         <p><b>Населення:</b>${population} людей</p> 
//       </li>`
//     }).join(' ')
// }

gallery.innerHTML = galleryItemTpl(countries)

import countries  from './countries.json';
import galleryItemTpl from '../templates/gallery-item.handlebars';