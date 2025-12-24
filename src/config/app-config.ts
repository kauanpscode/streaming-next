export const API_URL = 'https://strapi-api-2ycc.onrender.com/api';
export const SERIES_URL =
  `${API_URL}/tv-series` +
  `?populate[poster][populate]=*` +
  `&populate[background][populate]=*` +
  `&populate[genre]=*` +
  `&populate[seasons][populate][episodes][populate]=*`;

export const MOVIES_URL = `${API_URL}/movies`;

export const getSerieByIdUrl = (id: number) => {
  return `${API_URL}/tv-series?filters[id][$eq]=${id}&populate=*`;
};

export const getEpisodeById = async (id: string | number) => {
  const res = await fetch(`${API_URL}/episodes?filters[id][$eq]=${id}&populate=*`);

  const json = await res.json();
  return json.data[0] ?? null;
};

export const VIDEO_URL = 'https://pub-9d6582f2d76447a6bc5e7db2bec33edc.r2.dev/';
