import axios from 'axios';

async function getImagesByQuery(query, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '49742644-34971ccc2760c2b4b43c41938',
      q: query,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 15,
    },
  });
  return response.data;
}
export default getImagesByQuery;
