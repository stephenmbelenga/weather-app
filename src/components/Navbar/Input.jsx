import { InputBase, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Input({ value, onChange, onSubmit }) {
  return (
    <form name="form" onSubmit={onSubmit}>
      <InputBase
        value={value}
        onChange={onChange}
        placeholder="Search for a city..."
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        }
        sx={{
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 3,
          px: 2,
          py: 1,
        }}
      />
    </form>
  );
}
