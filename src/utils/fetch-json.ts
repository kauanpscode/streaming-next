export const fetchJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const json = await rawData.json();
  const jsonData = json.data;

  return jsonData;
};
