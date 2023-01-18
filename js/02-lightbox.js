import {
  galleryItems
} from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

function createGallery(ar) {
  console.log(ar)
  return ar
    .map(
      (item) =>
      `<a class="gallery__item" href = "${item.original}">
     <img class="gallery__image" src="${item.preview}" alt ="${item.description}"></a>`
    )
    .join("");

}

const gallery = createGallery(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", gallery);
// var lightbox = new SimpleLightbox(".gallery a");
// console.log(galleryItems[0].description);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  captionClass: 'ser'
});