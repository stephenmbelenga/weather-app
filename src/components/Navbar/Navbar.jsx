import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

import SearchBar from "./SearchBar";
import LocationButton from "./LocationBtn";

export default function Navbar({ onLocation }) {
  return (
    <AppBar
      position="sticky"
      color="transparent"
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
            color="primary"
            sx={{
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            🌦️ Weather App
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              maxWidth: 500,
              mx: "auto",
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
