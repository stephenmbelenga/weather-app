import { Typography } from "@mui/material";

export default function LastLocation({ location, onSelect }) {
  if (!location) return null;

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      onClick={() => onSelect(location)}
      sx={{
        cursor: "pointer",
        mt: 1,
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      Last location: {location.name}, {location.country}
    </Typography>
  );
}
