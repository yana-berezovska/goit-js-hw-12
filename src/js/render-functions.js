import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
export function createGallery(images) {
  const markup = images
    .map(
      item => `<div class="image-container"><li class="gallery-item">
      <a class="gallery-link" href="${item.webformatURL}">
      <img 
      class="gallery-image"
      src="${item.largeImageURL}"
      data-source="${item.webformatURL}"
      alt="${item.tags}"/>
      </a>
  </li>
  <div class="text-container">
      <li class="text-item">
        <h2>Likes</h2>
        <p>${item.likes}</p>
      </li>
       <li class="text-item">
        <h2>Views</h2>
        <p>${item.views}</p>
      </li>
       <li class="text-item">
        <h2>Comments</h2>
        <p>${item.comments}</p>
      </li>
       <li class="text-item">
        <h2>Downloads</h2>
        <p>${item.downloads}</p>
      </li>
    </div></div>
  `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightBox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.add('active');
}

export function hideLoader() {
  loader.classList.remove('active');
}
export const loadMoreBtn = document.querySelector('.load-more');

export function showLoadMoreButton() {
  loadMoreBtn.hidden = false;
}

export function hideLoadMoreButton() {
  loadMoreBtn.hidden = true;
}
