import {
  Container,
  Row,
  Card,
  Cover,
  VideoPlayerContainer,
  ModalHero,
  ModalContent,
  MetaData,
  SeasonSelect,
  EpisodeList
} from './styles';
import { TvSeries } from '@/src/domain/types/types';
import { useState, useMemo } from 'react';
import { Modal } from '@/src/components/Modal/Modal';

export type HomePageProps = {
  series: TvSeries[];
};

export default function HomePage({ series }: HomePageProps) {
  const [selectedSerie, setSelectedSerie] = useState<TvSeries | null>(null);
  const [selectedSeasonId, setSelectedSeasonId] = useState<number | null>(null);
  const [watchingEpisode, setWatchingEpisode] = useState<Episode | null>(null);

  const handleOpenSerie = (serie: TvSeries) => {
    setSelectedSerie(serie);
    setWatchingEpisode(null);

    if (serie.seasons && serie.seasons.length > 0) {
      setSelectedSeasonId(serie.seasons[0].id);
    }
  };

  const currentSeason = useMemo(() => {
    if (!selectedSerie?.seasons) return null;
    return selectedSerie.seasons.find((s) => s.id === selectedSeasonId);
  }, [selectedSerie, selectedSeasonId]);

  const handleClose = (serie: TvSeries) => {
    setSelectedSerie(null);
    setWatchingEpisode(null);
  };

  if (!series.length) return null;

  return (
    <>
      <Container>
        <h2>Séries</h2>
        <Row>
          {series.map((serie) => (
            <Card
              key={serie.id}
              onClick={() => setSelectedSerie(serie)}
              style={{ cursor: 'pointer' }}
            >
              <Cover src={serie.poster.formats.small.url} alt={serie.title} />
            </Card>
          ))}
        </Row>
      </Container>

      <Modal isOpen={!!selectedSerie} onClose={handleClose}>
        {selectedSerie && (
          <>
            {/* CENÁRIO 1: Assistindo Vídeo */}
            {watchingEpisode ? (
              <VideoPlayerContainer>
                <button
                  className="back-btn"
                  onClick={() => setWatchingEpisode(null)}
                >
                  ← Voltar aos Episódios
                </button>
                <video controls autoPlay>
                  <source src={watchingEpisode.videoUrl} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </VideoPlayerContainer>
            ) : (
              /* CENÁRIO 2: Detalhes da Série (Estilo Netflix) */
              <div>
                {/* Hero Image no Topo */}
                <ModalHero bgUrl={selectedSerie.background.url} />

                <ModalContent>
                  <h1>{selectedSerie.title}</h1>

                  <MetaData>
                    <span className="match">98% Relevante</span>
                    <span className="year">
                      {new Date(selectedSerie.publishedAt).getFullYear()}
                    </span>
                    <span className="genre">{selectedSerie.genre.name}</span>
                    <span>{selectedSerie.seasons.length} Temporadas</span>
                  </MetaData>

                  <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                    {selectedSerie.description}
                  </p>

                  {/* Seletor de Temporadas (Só exibe se tiver temporadas) */}
                  {selectedSerie.seasons.length > 0 && (
                    <div style={{ marginTop: '2rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <h3>Episódios</h3>
                        <SeasonSelect
                          value={selectedSeasonId || ''}
                          onChange={(e) =>
                            setSelectedSeasonId(Number(e.target.value))
                          }
                        >
                          {selectedSerie.seasons.map((season) => (
                            <option key={season.id} value={season.id}>
                              Temporada {season.season}
                            </option>
                          ))}
                        </SeasonSelect>
                      </div>

                      {/* Lista de Episódios */}
                      <EpisodeList>
                        {currentSeason?.episodes?.map((ep, index) => (
                          <EpisodeItem
                            key={ep.id}
                            onClick={() => setWatchingEpisode(ep)}
                          >
                            <div className="number">{index + 1}</div>

                            {/* Tenta pegar a capa do episódio, se não tiver, usa o poster da série */}
                            <img
                              className="thumb"
                              src={
                                ep.cover?.url ||
                                selectedSerie.poster.formats.small?.url
                              }
                              alt={ep.title}
                            />

                            <div className="info">
                              <h4>{ep.title}</h4>
                              <p>
                                {ep.description
                                  ? ep.description.substring(0, 120) + '...'
                                  : 'Sem descrição.'}
                              </p>
                            </div>

                            <div className="play-icon">▶</div>
                          </EpisodeItem>
                        ))}

                        {/* Fallback se a temporada estiver vazia */}
                        {(!currentSeason?.episodes ||
                          currentSeason.episodes.length === 0) && (
                          <p
                            style={{
                              padding: '20px',
                              textAlign: 'center',
                              color: '#666',
                            }}
                          >
                            Nenhum episódio cadastrado nesta temporada.
                          </p>
                        )}
                      </EpisodeList>
                    </div>
                  )}
                </ModalContent>
              </div>
            )}
          </>
        )}
      </Modal>
    </>
  );
}
