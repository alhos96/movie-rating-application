import { createSlice } from "@reduxjs/toolkit";
import { apiRequestStarted } from "./actions";

const slice = createSlice({
  name: "movies",

  initialState: {
    movies: [],
    success: "",
    error: "",
  },
  reducers: {
    moviesRecieved: (movies, { payload }) => {
      movies.movies = payload.data;
    },
    movieRated: (movies, { payload }) => {
      movies.movies = payload.data;
      movies.success = "Thank you!";
    },

    //Resets all error messages left behind. Dispatch on onmount.
    messageReset: (movies, { payload }) => {
      movies.success = "";
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

export const rateMovie = (url, method, data) => (dispatch, getState) => {
  dispatch(
    apiRequestStarted({
      url,
      method,
      data,
      onSuccess: movieRated.type,
      onError: gotError.type,
    })
  );
};
export const { moviesRecieved, movieRated, gotError, messageReset } = slice.actions;
export default slice.reducer;
