import { getLocation } from "./apiGetLocation";

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeather(lat, lon) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,

    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "is_day",
      "precipitation",
      "weather_code",
      "wind_speed_10m",
    ].join(","),

    hourly: [
      "temperature_2m",
      "precipitation_probability",
      "weather_code",
      "wind_speed_10m",
    ].join(","),

    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "sunrise",
      "sunset",
      "precipitation_probability_max",
    ].join(","),

    timezone: "auto",
    forecast_days: "7",
  });

  const res = await fetch(`${BASE_URL}?${params}`);

  if (!res.ok) {
    throw new Error("Unable to fetch weather data!!");
  }

  return res.json();
}
