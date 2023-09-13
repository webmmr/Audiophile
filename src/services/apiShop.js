const BASE_URL = "http://localhost:3000/data";

export async function getData() {
  const res = await fetch(BASE_URL);

  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();

  return data;
}
