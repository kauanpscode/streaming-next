import { getSerieByIdUrl } from '@/src/config/app-config';
import { TvSeries } from '@/src/domain/types/types';
import { fetchJson } from '@/src/utils/fetch-json';

type StrapiResponse<T> = T[];

export const getSerieById = async ( id: number): Promise<TvSeries | null> => {
    const url = getSerieByIdUrl(id);

    const response = await fetchJson<StrapiResponse<TvSeries>>(url);

    return response[0] ?? null;
}
