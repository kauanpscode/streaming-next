import { Container, Hero, Row, Card } from './styles';
import { TvSeries } from '@/src/domain/types/types';

export type HomePageProps = {
  series: TvSeries[];
};

export default function HomePage({ series }: HomePageProps) {
  if (!series.length) return null;

  const [featured, ...rest] = series;

  return (
    <>
      <Container>
        <Hero
        >
          <h1>{featured.title}</h1>
          <p>{featured.id}</p>
        </Hero>
        <Row>
        {series.map((serie) => (
          <Card key={serie.id}>
            <img src={serie.poster.formats.small.url} alt={serie.title}/>
          </Card>
        ))}
        </Row>
      </Container>
    </>
  );
}
