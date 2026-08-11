import { Card, CardContent, Stack, Typography } from "@mui/material";

import { getWeatherInfo } from "@/utils/weatherCodes";
import formatter from "@/utils/formatter";

export default function DailyForecast({ weather }) {
  if (!weather) return null;

  const {
    time,
    weather_code,
    temperature_2m_max,
    temperature_2m_min,
    precipitation_probability_max,
  } = weather.daily;

  return (
    <Stack spacing={1}>
      {time.map((date, index) => {
        const info = getWeatherInfo(weather_code[index]);

        return (
          <Card
            key={date}
            elevation={0}
            sx={{
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <CardContent
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", sm: "1.5fr 1fr 1fr 1fr" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography fontWeight={600}>
                {new Date(date).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </Typography>

              <Typography>
                {info.icon} {info.description}
              </Typography>

              <Typography>
                {formatter(temperature_2m_max[index])}° /{" "}
                {formatter(temperature_2m_min[index])}°
              </Typography>

              <Typography color="text.secondary">
                🌧 {precipitation_probability_max[index]}%
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
}
