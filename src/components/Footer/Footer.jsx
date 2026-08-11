import {
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Footer() {
  return (
    <Card
      component="footer"
      sx={{
        mt: 8,
        backgroundColor: "background.paper",
      }}
    >
      <Divider />

      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "center", md: "center" }}
          spacing={3}
          sx={{ py: 4 }}
        >
          {/* Brand */}
          <CardContent textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h6" fontWeight={700} color="primary">
              🌦️ Weather App
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Simple, accurate weather forecasts.
            </Typography>
          </CardContent>

          {/* Data source */}
          <CardContent textAlign="center">
            <Typography variant="body2" color="text.secondary">
              Weather data provided by{" "}
              <Link
                href="https://open-meteo.com/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                Open-Meteo
                <OpenInNewIcon
                  sx={{
                    fontSize: 14,
                    ml: 0.5,
                    verticalAlign: "middle",
                  }}
                />
              </Link>
            </Typography>
          </CardContent>

          {/* Social links */}
          <Stack direction="row" spacing={2}>
            <Link
              href="https://github.com/stephenmbelenga"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </Link>

            <Link
              href="https://www.linkedin.com/in/stephenmbelenga"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </Link>
          </Stack>
        </Stack>

        <Divider />

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{ py: 2 }}
        >
          © {new Date().getFullYear()}. Made by Stephen Murumba. All rights
          reserved. Use for Education Purposes Only.
        </Typography>
      </Container>
    </Card>
  );
}
