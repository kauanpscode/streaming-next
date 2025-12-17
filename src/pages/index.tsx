import { GetStaticProps } from 'next';
import HomePage from '../containers/HomePage';
import { TvSeries } from '../domain/types/types';
import { getAllSeries } from '../data/series/get-all-series';

export type HomeProps = {
  series: TvSeries[];
};

export default function Home({ series }: HomeProps) {
  return <HomePage series={series} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const series = await getAllSeries();

  return {
    props: { series },
  };
};
