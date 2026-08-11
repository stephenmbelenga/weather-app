import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

import { getWeatherInfo } from "@/utils/weatherCodes";
import formatter from "@/utils/formatter";

export default function CurrentWeather({ weather, location }) {
  if (!weather) return null;

  const current = weather.current;

  const weatherInfo = getWeatherInfo(current.weather_code);

  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <CardContent sx={{ p: { xs: 3, md: 5 } }}>
        <Stack spacing={2}>
          <Typography variant="h5" fontWeight={600}>
            {location?.name || "Your Location"}
          </Typography>

          <Typography color="text.secondary">{location?.country}</Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "4rem",
                  md: "6rem",
                },
                fontWeight: 700,
              }}
            >
              {formatter(current.temperature_2m)}°
            </Typography>

            <Box>
              <Typography fontSize="4rem">{weatherInfo.icon}</Typography>

              <Typography variant="h6">{weatherInfo.description}</Typography>
            </Box>
          </Box>

          <Typography color="text.secondary">
            Feels like {formatter(current.apparent_temperature)}°
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
