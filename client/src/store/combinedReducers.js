import { combineReducers } from "redux";
import moviesReducers from "./moviesSlice";
import tvShowsReducers from "./tvShowsSlice";

export default combineReducers({
  movies: moviesReducers,
  tvShows: tvShowsReducers,
});
