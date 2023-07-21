import countries from "./country.json";
import galleryItemTpl from "./templates/gallery.handlebars";
const gallery = document.querySelector('.js-gallery')
galleryItemTpl(countries)

gallery.innerHTML = galleryItemTpl(countries)
