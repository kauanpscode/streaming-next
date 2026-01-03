import { MOVIES_URL } from '@/src/config/app-config';
import { Movie } from '@/src/domain/types/types';
import { fetchJson } from '@/src/utils/fetch-json';

export const getAllMovies = async (): Promise<Movie[]> => {
  const movies = await fetchJson<Movie[]>(MOVIES_URL);
  return movies;
};
