import React, { useState } from "react";
import MoviesList from "./MoviesList";
import ToggleRibbon from "./ToggleRibbon";
import TvShowsList from "./TvShowsList";

function MainScreen() {
  const [toRender, setToRender] = useState("movies");

  return (
    <>
      <ToggleRibbon toRender={toRender} setToRender={setToRender} />

      {toRender === "movies" && <MoviesList />}
      {toRender === "tvShows" && <TvShowsList />}
    </>
  );
}

export default MainScreen;
