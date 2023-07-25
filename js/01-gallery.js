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
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`;
}

function createGallery() {
  const galleryHtml = galleryItems.map(createGalleryElement).join("");
  gallery.innerHTML = galleryHtml;
}

gallery.addEventListener("click", imageClick);

function imageClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.classList.contains("gallery__image")) {
    const largeImageUrl = target.dataset.source;
    openModal(largeImageUrl);
  }
}

function openModal(url) {
  const instance = basicLightbox.create(
    `<img src="${url}" width="800" height="600">`
  );
    instance.show();
    document.body.addEventListener("keydown", event => {
        if (event.code === "Escape") {
          instance.close();
        }
      });
}


console.log(galleryItems);
