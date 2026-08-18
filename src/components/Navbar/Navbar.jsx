import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

import SearchBar from "./SearchBar";
import LocationButton from "./LocationBtn";

export default function Navbar({ onLocation }) {
  return (
    <AppBar
      position="sticky"
      color="secondary"
      elevation={0}
      sx={{
        background: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            gap: 2,
            py: 1,
          }}
        >
          <Typography
            variant="h6"
            color=""
            sx={{
              fontWeight: 700,
              whiteSpace: "nowrap",
              display: { xs: "none", sm: "inline" },
            }}
          >
            🌦️ Weather App
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              mx: "auto",
              xs: { maxWidth: 800 },
              lg: { maxWidth: 500 },
            }}
          >
            <SearchBar onLocation={onLocation} />
          </Box>

          <LocationButton onLocation={onLocation} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
