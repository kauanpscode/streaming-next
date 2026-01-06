import { API_URL } from "@/src/config/app-config";

export const getEpisodeById = async (id: string | number) => {
  const res = await fetch(`${API_URL}/episodes?filters[id][$eq]=${id}&populate=*`);

  const json = await res.json();
  return json.data[0] ?? null;
};