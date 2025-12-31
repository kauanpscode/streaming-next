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

  return (
    <div className="min-h-screen bg-black text-white relative">
      <button
        onClick={() => router.back()}
        className="absolute rounded-full top-6 left-6 z-10 bg-black/70 px-4 py-2 rounded hover:bg-black"
      >
        ←
      </button>

      <video
        src={videoUrl}
        controls
        autoPlay
        className="w-full h-screen object-contain bg-black"
      />
    </div>
  );
}
