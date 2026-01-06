import { API_URL } from "@/src/config/app-config";

export const getMovieById = async (id: string | number) => {
  const res = await fetch(`${API_URL}/movies?filters[id][$eq]=${id}&populate=*`);
console.log(res)
  const json = await res.json();
  return json.data[0] ?? null;
};