export const API_URL = 'https://strapi-api-2ycc.onrender.com/api';
export const SERIES_URL = `${API_URL}/tv-series?populate=*`;
export const MOVIES_URL = `${API_URL}/movies`;

export const getSerieByIdUrl = (id: number) => {
  return `${API_URL}/tv-series?filters[id][$eq]=${id}&populate=*`;
};
