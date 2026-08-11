import formatter from "@/utils/formatter";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function WeatherStats({ weather }) {
  if (!weather) return null;

  const current = weather.current;

  const stats = [
    {
      label: "Humidity",
      value: `${current.relative_humidity_2m}%`,
      icon: "💧",
    },
    {
      label: "Wind",
      value: `${formatter(current.wind_speed_10m)} km/h`,
      icon: "💨",
    },
    {
      label: "Precipitation",
      value: `${current.precipitation} mm`,
      icon: "🌧️",
    },
  ];

  return (
    <Grid container spacing={2}>
      {stats.map((stat) => (
        <Grid size={{ xs: 12, sm: 4 }} key={stat.label}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <CardContent>
              <Typography fontSize="2rem">{stat.icon}</Typography>

              <Typography color="text.secondary" variant="body2">
                {stat.label}
              </Typography>

              <Typography variant="h6" fontWeight={600}>
                {stat.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
