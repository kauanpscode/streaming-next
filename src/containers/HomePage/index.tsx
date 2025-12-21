import { TvSeries } from '@/src/domain/types/types';
import { useState, useMemo } from 'react';
import { Modal } from '@/src/components/Modal/Modal';
import { useRouter } from 'next/router';

export type HomePageProps = {
  series: TvSeries[];
};

export default function HomePage({ series }: HomePageProps) {
  const router = useRouter();

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

  if (series && !series.length) return null;

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <h1 className="text-3xl font-bold">Séries</h1>
      <hr className="mb-5" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {series.map((serie) => (
          <div
            key={serie.id}
            className="cursor-pointer hover:scale-105 transition"
            onClick={() => handleOpenSerie(serie)}
          >
            <img
              src={serie.poster?.formats?.small?.url}
              alt={serie.title}
              className="w-full h-[250px] object-cover rounded"
            ></img>
          </div>
        ))}
      </div>

      {selectedSerie && (
        <Modal isOpen={true} onClose={() => handleClose(selectedSerie)}>
          <div className="relative w-full h-[420px]">
            <img
              src={
                selectedSerie.background?.formats?.large?.url ||
                selectedSerie.poster?.formats?.small?.url
              }
              alt={selectedSerie.title}
              className="w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            {/* INFO NO BANNER */}
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-4xl font-bold mb-2">{selectedSerie.title}</h2>

              <span className="text-sm text-neutral-300">
                {selectedSerie.genre?.name}
              </span>
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
                      {' '}
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
                    <div
                      key={episode.id}
                      onClick={() => router.push(`/watch/${episode.id}`)}
                      className="flex gap-4 p-3 rounded cursor-pointer hover:bg-neutral-800 transition"
                    >
                      <div className="w-32 h-20 bg-neutral-700 rounded flex items-center justify-center text-sm">
                        EP. {episode.episode_number}
                      </div>
                      <div>
                        <h4 className="font-semibold">{episode.title}</h4>
                        <p className="text-sm text-neutral-400 line-clamp-2">
                          {episode.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}
