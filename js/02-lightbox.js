import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

createGallery();

function createGalleryElement(item) {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  </li>`;
}

function createGallery() {
  const galleryHtml = galleryItems.map(createGalleryElement).join("");
  gallery.innerHTML = galleryHtml;
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsPosition: "bottom",
  captionDelay: 250,
});
console.log(galleryItems);
