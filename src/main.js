import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  loadMoreBtn,
  showLoadMoreButton,
  hideLoadMoreButton,
} from '/js/render-functions.js';

const form = document.querySelector('.form');

let page = 1;
let query = '';

form.addEventListener('submit', handlSubmit);
async function handlSubmit(event) {
  event.preventDefault();

  clearGallery();

  query = form.elements['search-text'].value.trim();
  if (!query) {
    form.reset();
    iziToast.error({
      message: 'Please fill in the search field!',
      position: 'topRight',
      backgroundColor: '#ef4040',
    });
    return;
  }
  // const searchText = event.target.elements['search-text'].value;

  showLoader();
  hideLoadMoreButton();
  try {
    const { hits, totalHits } = await getImagesByQuery(query, page);

    if (hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#ef4040',
      });
      hideLoadMoreButton();
      return;
    }
    hideLoader();
    createGallery(hits);
    checkEndOfCollection(totalHits);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
    form.reset();
  }
}
loadMoreBtn.addEventListener('click', loadMore);

async function loadMore(event) {
  const moreBtn = event.currentTarget;
  if (!moreBtn) return;

  page++;
  hideLoadMoreButton();
  moreBtn.disabled = true;
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(query, page);

    createGallery(hits);
    setTimeout(() => smoothScroll(), 0);
    checkEndOfCollection(totalHits);
    moreBtn.disabled = false;
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}

function checkEndOfCollection(totalHits) {
  if (page * 15 >= totalHits) {
    iziToast.error({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
      backgroundColor: '#ef4040',
    });

    hideLoadMoreButton();
  } else {
    showLoadMoreButton();
  }
}

function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  const rect = galleryItem.getBoundingClientRect();
  const heightItem = rect.height;

  window.scrollBy({
    top: heightItem * 2,
    behavior: 'smooth',
  });
}
