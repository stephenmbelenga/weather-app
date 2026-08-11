const LOCATION_KEY = "weather-last-location";

export function saveLocation(location) {
  if (typeof window === "undefined") return;

  localStorage.setItem(LOCATION_KEY, JSON.stringify(location));
}

export function getSavedLocation() {
  if (typeof window === "undefined") return null;

  const savedLocation = localStorage.getItem(LOCATION_KEY);

  if (!savedLocation) return null;

  try {
    return JSON.parse(savedLocation);
  } catch (error) {
    console.error("Failed to parse saved location:", error);

    localStorage.removeItem(LOCATION_KEY);

    return null;
  }
}

export function removeSavedLocation() {
  if (typeof window === "undefined") return;

  localStorage.clear();
}
