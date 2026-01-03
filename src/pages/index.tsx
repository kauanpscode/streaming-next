import { GetStaticProps } from 'next';
import HomePage from '../containers/HomePage';
import { TvSeries, Movie } from '../domain/types/types';
import { getAllSeries } from '../data/series/get-all-series';
import { getAllMovies } from '../data/movies/get-all-movies';

export type HomeProps = {
  series: TvSeries[];
  movies: Movie[];
};

export default function Home({ series, movies }: HomeProps) {
  return <HomePage series={series} movies={movies} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const series = await getAllSeries();
  const movies = await getAllMovies();

  return {
    props: { series, movies },
  };
};
