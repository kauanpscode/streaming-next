import { SERIES_URL } from '@/src/config/app-config';
import { PostData } from '@/src/domain/posts/post';
import { fetchJson } from '@/src/utils/fetch-json';

export const getAllSeries = async (): Promise<PostData[]> => {
  const posts = await fetchJson<PostData[]>(SERIES_URL);
  return posts;
};
