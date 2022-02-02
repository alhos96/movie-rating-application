import { Divider, ToggleButtonGroup, ToggleButton } from "@mui/material";

function ToggleRibbon({ renderMoviesOrShows, setRenderMoviesOrShows }) {
  function handleChange(e) {
    setRenderMoviesOrShows(e.target.value);
  }

  return (
    <Divider sx={{ mb: 5 }} textAlign="right">
      <ToggleButtonGroup color="secondary" value={renderMoviesOrShows} exclusive onChange={handleChange}>
        <ToggleButton value="movies">Movies</ToggleButton>
        <ToggleButton value="tvShows">TV-shows</ToggleButton>
      </ToggleButtonGroup>
    </Divider>
  );
}

export default ToggleRibbon;
