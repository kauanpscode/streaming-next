export const API_URL = 'https://strapi-api-2ycc.onrender.com/api';
export const SERIES_URL =
  `${API_URL}/tv-series` +
  `?populate[poster][populate]=*` +
  `&populate[background][populate]=*` +
  `&populate[genres]=*` +
  `&populate[seasons][populate][episodes][populate]=*`;

export const MOVIES_URL =
  `${API_URL}/movies` +
  `?populate[poster][populate]=*` +
  `&populate[background][populate]=*`;

export const getSerieByIdUrl = (id: number) => {
  return `${API_URL}/tv-series?filters[id][$eq]=${id}&populate=*`;
};