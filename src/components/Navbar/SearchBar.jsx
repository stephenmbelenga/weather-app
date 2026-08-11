import { useState } from "react";

import { Box } from "@mui/material";

import Input from "./Input";

import { searchLocation } from "@/services/apiGeocoding";

export default function SearchBar({ onLocation }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    try {
      const results = await searchLocation(query);

      if (!results.length) {
        alert("Location not found");
        return;
      }

      const location = results[0];

      onLocation({
        lat: location.latitude,
        lon: location.longitude,
        name: location.name,
        country: location.country,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}
