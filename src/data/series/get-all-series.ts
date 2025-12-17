import { SERIES_URL } from '@/src/config/app-config';
import { TvSeries } from '@/src/domain/types/types';
import { fetchJson } from '@/src/utils/fetch-json';

export const getAllSeries = async (): Promise<TvSeries[]> => {
  const series = await fetchJson<TvSeries[]>(SERIES_URL);
  return series;
};
