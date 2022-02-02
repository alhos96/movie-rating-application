export function viewMore(
  renderMoviesOrShows,
  setMoviesAmount,
  setShowsAmount,
  disableLessButton,
  setDisableLessButton,
  dispatch,
  getMovies
) {
  if (renderMoviesOrShows === "movies") {
    setMoviesAmount((e) => e + 10);
    dispatch(getMovies);
    if (disableLessButton) setDisableLessButton(false);
  } else {
    setShowsAmount((e) => e + 10);
    if (disableLessButton) setDisableLessButton(false);
  }
}

export function viewLess(renderMoviesOrShows, moviesAmount, setMoviesAmount, showsAmount, setShowsAmount, setDisableLessButton) {
  if (renderMoviesOrShows === "movies") {
    if (moviesAmount > 10) {
      setMoviesAmount((e) => e - 10);
    } else {
      setDisableLessButton(true);
    }
  } else {
    if (showsAmount > 10) {
      setShowsAmount((e) => e - 10);
    } else {
      setDisableLessButton(true);
    }
  }
}
