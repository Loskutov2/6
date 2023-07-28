import countries from "./country.json";
import galleryItemTpl from "./templates/gallery.handlebars";
const gallery = document.querySelector('.js-gallery')
galleryItemTpl(countries)

gallery.innerHTML = galleryItemTpl(countries)

document.querySelector('#btn1').addEventListener('click', showOnly)
document.querySelector('#btn2').addEventListener('click', showOnly)
document.querySelector('#btn3').addEventListener('click', showOnly)
document.querySelector('#btn4').addEventListener('click', showOnly)
document.getElementById("btn4").addEventListener("click", showOnly);


function showOnly(e) {
    const Itms = document.querySelectorAll('.gallery__item')
    const specialItms = document.querySelectorAll(e.target.dataset.show)
    Itms.forEach(Itm=>{Itm.classList.add('hidden')})
    specialItms.forEach(specialItm=>{specialItm.classList.remove('hidden')})
}
