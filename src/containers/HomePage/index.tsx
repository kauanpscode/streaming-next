import { Container } from './styles';
import { TvSeries } from '@/src/domain/types/types';

export type HomePageProps = {
  series: TvSeries[];
};

export default function HomePage({ series }: HomePageProps) {
  return (
    <>
      <Container>
        {series.map((serie) => (
          <h2 key={serie.title}>{serie.title}</h2>
        ))}
      </Container>
    </>
  );
}
