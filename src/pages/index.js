import { useEffect, useState } from "react";

import {
  Alert,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import Navbar from "@/components/Navbar/Navbar";

import CurrentWeather from "@/components/Weather/CurrentWeather";
import WeatherStats from "@/components/Weather/WeatherStats";
import HourlyForecast from "@/components/Weather/HourlyForecast";
import DailyForecast from "@/components/Weather/DailyForecast";

import { getWeather } from "@/services/apiWeather";

import {
  getSavedLocation,
  removeSavedLocation,
  saveLocation,
} from "@/utils/localStorage";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleNewLocation = async (newLocation) => {
    try {
      setLoading(true);
      setError("");

      const data = await getWeather(newLocation.lat, newLocation.lon);

      setWeather(data);
      setLocation(newLocation);

      // Save the successful location
      saveLocation(newLocation);
    } catch (error) {
      console.error(error);

      setError("Unable to retrieve weather data.");
    } finally {
      setLoading(false);
      removeSavedLocation();
    }
  };

  useEffect(() => {
    const savedLocation = getSavedLocation();

    if (savedLocation) {
      // eslint-disable-next-line
      handleNewLocation(savedLocation);
    }
  }, []);

  return (
    <>
      <Navbar onLocation={handleNewLocation} />

      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Stack spacing={4} alignItems="center">
          <Typography variant="h4" fontWeight={700} color="primary">
            Weather Dashboard
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          {loading && (
            <Stack alignItems="center" py={8}>
              <CircularProgress />

              <Typography mt={2}>Loading weather...</Typography>
            </Stack>
          )}

          {!loading && weather && (
            <>
              <CurrentWeather weather={weather} location={location} />

              <WeatherStats weather={weather} />

              <HourlyForecast weather={weather} />

              <Stack spacing={2}>
                <Typography variant="h5" fontWeight={600} color="primary">
                  7-Day Forecast
                </Typography>

                <DailyForecast weather={weather} />
              </Stack>
              <Footer />
            </>
          )}

          {!loading && !weather && (
            <Stack py={10} alignItems="center">
              <Typography variant="h5" color="text.secondary">
                Search for a city or use your location
              </Typography>
            </Stack>
          )}
        </Stack>
      </Container>
    </>
  );
}
