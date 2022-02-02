import React, { useState } from "react";
import MoviesList from "./MoviesList";
import ToggleRibbon from "./ToggleRibbon";
import TvShowsList from "./TvShowsList";

function MainScreen() {
  const [renderMoviesOrShows, setRenderMoviesOrShows] = useState("movies");

  return (
    <>
      <ToggleRibbon renderMoviesOrShows={renderMoviesOrShows} setRenderMoviesOrShows={setRenderMoviesOrShows} toggleButton={true} />

      {renderMoviesOrShows === "movies" && <MoviesList />}
      {renderMoviesOrShows === "tvShows" && <TvShowsList />}
    </>
  );
}

export default MainScreen;
