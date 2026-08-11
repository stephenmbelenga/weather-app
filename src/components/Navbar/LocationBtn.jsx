import { useState } from "react";

import { CircularProgress, IconButton, Tooltip } from "@mui/material";

import MyLocationIcon from "@mui/icons-material/MyLocation";

import { getLatLong } from "@/services/apiGeoLocation";

export default function LocationButton({ onLocation }) {
  const [loading, setLoading] = useState(false);

  const handleGetLocation = async () => {
    try {
      setLoading(true);

      const { lat, lon } = await getLatLong();

      onLocation({
        lat,
        lon,
      });
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Tooltip title="Use my location">
      <span>
        <IconButton
          onClick={handleGetLocation}
          disabled={loading}
          color="primary"
        >
          {loading ? <CircularProgress size={22} /> : <MyLocationIcon />}
        </IconButton>
      </span>
    </Tooltip>
  );
}
