import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '33426614-9a0c8e3f9bb6f34c59afb512d';
const basicQueryParams = 'image_type=photo&orientation=horizontal&per_page=12';

export const getImages = async (searchQuery, page) => {
  const response = await axios.get(
    `/?q=${searchQuery}&page=${page}&key=${API_KEY}&${basicQueryParams}`
  );
  return response.data.hits;
};

