import { combineReducers } from "redux";
import moviesReducers from "./moviesSlice";

export default combineReducers({
  movies: moviesReducers,
});
