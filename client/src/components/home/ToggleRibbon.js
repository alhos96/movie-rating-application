import { Divider, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { currentLocation } from "../../store/moviesSlice";

function ToggleRibbon({ renderMoviesOrShows, setRenderMoviesOrShows }) {
  const dispatch = useDispatch();

  function handleChange(e) {
    setRenderMoviesOrShows(e.target.value);
    dispatch(currentLocation(e.target.value));
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
