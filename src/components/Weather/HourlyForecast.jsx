import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

import { getWeatherInfo } from "@/utils/weatherCodes";
import formatter from "@/utils/formatter";

export default function HourlyForecast({ weather }) {
  if (!weather) return null;

  const { time, temperature_2m, weather_code } = weather.hourly;

  const currentHour = new Date().getHours();

  const hours = time
    .map((time, index) => ({
      time,
      temperature: temperature_2m[index],
      code: weather_code[index],
    }))
    .filter((item) => {
      const hour = new Date(item.time).getHours();

      return hour >= currentHour;
    })
    .slice(0, 12);

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} mb={2} color="primary">
        Hourly Forecast
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          pb: 2,
        }}
      >
        {hours.map((hour) => {
          const info = getWeatherInfo(hour.code);

          return (
            <Card
              key={hour.time}
              elevation={0}
              sx={{
                minWidth: 110,
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <CardContent>
                <Stack alignItems="center" spacing={1}>
                  <Typography variant="body2">
                    {new Date(hour.time).toLocaleTimeString([], {
                      hour: "numeric",
                    })}
                  </Typography>

                  <Typography fontSize="2rem">{info.icon}</Typography>

                  <Typography variant="h6" fontWeight={600}>
                    {formatter(hour.temperature)}°
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
