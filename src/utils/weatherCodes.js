export function getWeatherInfo(code) {
  const weatherCodes = {
    0: {
      description: "Clear sky",
      icon: "☀️",
    },

    1: {
      description: "Mainly clear",
      icon: "🌤️",
    },

    2: {
      description: "Partly cloudy",
      icon: "⛅",
    },

    3: {
      description: "Overcast",
      icon: "☁️",
    },

    45: {
      description: "Fog",
      icon: "🌫️",
    },

    48: {
      description: "Depositing rime fog",
      icon: "🌫️",
    },

    51: {
      description: "Light drizzle",
      icon: "🌦️",
    },

    53: {
      description: "Moderate drizzle",
      icon: "🌦️",
    },

    55: {
      description: "Dense drizzle",
      icon: "🌧️",
    },

    61: {
      description: "Slight rain",
      icon: "🌦️",
    },

    63: {
      description: "Moderate rain",
      icon: "🌧️",
    },

    65: {
      description: "Heavy rain",
      icon: "🌧️",
    },

    71: {
      description: "Slight snow",
      icon: "🌨️",
    },

    73: {
      description: "Moderate snow",
      icon: "🌨️",
    },

    75: {
      description: "Heavy snow",
      icon: "❄️",
    },

    80: {
      description: "Slight rain showers",
      icon: "🌦️",
    },

    81: {
      description: "Moderate rain showers",
      icon: "🌧️",
    },

    82: {
      description: "Violent rain showers",
      icon: "⛈️",
    },

    95: {
      description: "Thunderstorm",
      icon: "⛈️",
    },

    96: {
      description: "Thunderstorm with hail",
      icon: "⛈️",
    },

    99: {
      description: "Thunderstorm with heavy hail",
      icon: "⛈️",
    },
  };

  return (
    weatherCodes[code] || {
      description: "Unknown",
      icon: "🌡️",
    }
  );
}
