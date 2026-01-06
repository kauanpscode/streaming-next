import { TvSeries, Movie } from '@/src/domain/types/types';
import { useState, useMemo } from 'react';
import { Modal } from '@/src/components/Modal/Modal';
import { useRouter } from 'next/router';
import { MediaCard } from '@/src/components/MediaCard';
import { PrimaryButton } from '@/src/components/PrimaryButton';
import Link from 'next/link';

export type HomePageProps = {
  series: TvSeries[];
  movies: Movie[];
};

export default function HomePage({ series, movies }: HomePageProps) {
  const router = useRouter();

  const [selectedSerie, setSelectedSerie] = useState<TvSeries | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedSeasonId, setSelectedSeasonId] = useState<number | null>(null);

  const handleOpenSerie = (serie: TvSeries) => {
    setSelectedSerie(serie);

    if (serie.seasons && serie.seasons.length > 0) {
      setSelectedSeasonId(serie.seasons[0].id);
    }
  };

  const handleOpenMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const currentSeason = useMemo(() => {
    if (!selectedSerie?.seasons) return null;
    return selectedSerie.seasons.find((s) => s.id === selectedSeasonId);
  }, [selectedSerie, selectedSeasonId]);

  const handleClose = () => {
    setSelectedSerie(null);
    setSelectedSeasonId(null);
    setSelectedMovie(null);
  };

  if (!series || !series.length) return null;

  return (
    <main className="min-h-screen text-white p-8">
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Séries</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {series?.map((serie) => (
            <MediaCard
              key={serie.id}
              title={serie.title}
              image={
                serie.poster?.formats?.small?.url || serie.poster?.url || ''
              }
              onClick={() => handleOpenSerie(serie)}
            />
          ))}
        </div>
      </section>

      {selectedSerie && (
        <Modal isOpen={true} onClose={handleClose}>
          <div className="relative w-full h-[420px]">
            <img
              src={selectedSerie.background?.formats?.large?.url || ''}
              alt={selectedSerie.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-4xl font-bold mb-2">{selectedSerie.title}</h2>

              {selectedSerie.genres && selectedSerie.genres.length > 0 && (
                <span className="text-sm text-neutral-300">
                  {selectedSerie.genres.map((g) => g.name).join(' • ')}
                </span>
              )}
            </div>
          </div>

          <div className="p-6 space-y-6">
            <p className="text-sm text-neutral-300 leading-relaxed max-w-3xl">
              {selectedSerie.description}
            </p>

            {selectedSerie.seasons && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Temporadas</h3>
                <div className="flex gap-2 flex-wrap">
                  {selectedSerie.seasons.map((season) => (
                    <button
                      key={season.id}
                      onClick={() => setSelectedSeasonId(season.id)}
                      className={`px-4 py-2 rounded text-sm border transition ${
                        season.id === selectedSeasonId
                          ? 'bg-white text-black'
                          : 'border-neutral-700 text-neutral-300 hover:border-white'
                      }`}
                    >
                      Temporada {season.season}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentSeason?.episodes && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Episódios</h3>

                <div className="space-y-3">
                  {currentSeason.episodes.map((episode) => (
                    <Link
                      href={`/watchEpisode/${episode.id}`}
                      key={episode.id}
                      onClick={() => {
                        setSelectedSerie(null);
                      }}
                      className="flex gap-4 p-3 rounded cursor-pointer hover:bg-neutral-800 transition"
                    >
                      <div className="w-60 h-20 bg-neutral-700   rounded flex items-center justify-center overflow-hidden">
                        <img
                          src={episode.thumbnail?.formats?.small?.url || ''}
                          alt={selectedSerie.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold">
                          {episode.episode_number}. {episode.title}
                        </h4>
                        <p className="text-sm text-neutral-400 line-clamp-2">
                          {episode.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}

      <h1 className="text-2xl font-bold mb-4">Filmes</h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies?.map((movie) => (
          <MediaCard
            title={movie.title}
            key={movie.id}
            image={movie.poster?.formats?.small?.url || movie.poster?.url || ''}
            onClick={() => handleOpenMovie(movie)}
          />
        ))}
      </div>

      {selectedMovie && (
        <Modal isOpen={true} onClose={handleClose}>
          <div className="relative w-full h-[420px]">
            <img
              src={selectedMovie.background?.formats?.large?.url || ''}
              alt={selectedMovie.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-4xl font-bold mb-2">{selectedMovie.title}</h2>

              {selectedMovie.genres && selectedMovie.genres.length > 0 && (
                <span className="text-sm text-neutral-300">
                  {selectedMovie.genres.map((g) => g.name).join(' • ')}
                </span>
              )}
            </div>
          </div>

          <div className="p-6 space-y-6">
            <p className="text-sm text-neutral-300 leading-relaxed max-w-3xl">
              {selectedMovie.description}
            </p>
            <Link href={`/watchMovie/${selectedMovie.id}`}>
              <PrimaryButton>Assistir</PrimaryButton>
            </Link>
          </div>
        </Modal>
      )}
    </main>
  );
}
