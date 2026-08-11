const BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";

export async function searchLocation(query) {
  if (!query.trim()) {
    return [];
  }

  const params = new URLSearchParams({
    name: query,
    count: "5",
    language: "en",
    format: "json",
  });

  const res = await fetch(`${BASE_URL}?${params}`);

  if (!res.ok) {
    throw new Error("Unable to search location");
  }

  const data = await res.json();

  return data.results || [];
}
