import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getEpisodeById, VIDEO_URL } from '@/src/config/app-config';

export default function WatchEpisodePage() {
  const router = useRouter();
  const { episodeId } = router.query;

  const [episode, setEpisode] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!episodeId) return;

    const loadEpisode = async () => {
      setLoading(true);
      const data = await getEpisodeById(episodeId as string);
      setEpisode(data);
      setLoading(false);
    };

    loadEpisode();
  }, [episodeId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Carregando episódio...
      </div>
    );
  }

  if (!episode) return null;

  const videoUrl = episode.video_url;

  console.log('VIDEO: ', videoUrl)

  return (
    <div className="min-h-screen bg-black text-white relative">
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 z-10 bg-black/70 px-4 py-2 rounded hover:bg-black"
      >
        ← Voltar
      </button>

      <video
        src={videoUrl}
        controls
        autoPlay
        className="w-full h-screen object-contain bg-black"
      />

      <div className="absolute bottom-10 left-10 max-w-xl">
        <h1 className="text-2xl font-bold">{episode.title}</h1>
        <p className="text-sm text-neutral-300">{episode.description}</p>
      </div>
    </div>
  );
}
