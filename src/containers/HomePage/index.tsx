import { Container } from './styles';
import { PostData } from '@/src/domain/posts/post';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <Container>
      {posts.map((post) => (
        <h2 key={post.title}>{post.title}</h2>
      ))}
    </Container>
  );
}
