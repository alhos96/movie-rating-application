import { createSlice } from "@reduxjs/toolkit";
import { apiRequestStarted } from "./actions";

const slice = createSlice({
  name: "movies",

  initialState: {
    movies: [],
    tvShows: [],
  },
  reducers: {
    moviesRecieved: (movies, { payload }) => {
      movies.movies = payload.data.movies;
      movies.tvShows = payload.data.tvShows;
    },

    //Resets all error messages left behind. Dispatch on onmount.
    messageReset: (movies, { payload }) => {
      movies.message = "";
      movies.error = "";
    },

    gotError: (movies, { payload }) => {
      console.log(payload);
      movies.error = payload;
    },
  },
});

export const getMovies = (url, method, data) => (dispatch, getState) => {
  dispatch(
    apiRequestStarted({
      url,
      method,
      data,
      onSuccess: moviesRecieved.type,
      onError: gotError.type,
    })
  );
};

export const { moviesRecieved, gotError } = slice.actions;
export default slice.reducer;
