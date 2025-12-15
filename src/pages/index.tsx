import { GetStaticProps } from 'next';
import HomePage from '../containers/HomePage';
import { PostData } from '../domain/posts/post';
import { getAllSeries } from '../data/series/get-all-series';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllSeries();

  return {
    props: { posts },
  };
};
