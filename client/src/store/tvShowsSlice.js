import { createSlice } from "@reduxjs/toolkit";
import { apiRequestStarted } from "./actions";

const slice = createSlice({
  name: "tvShows",

  initialState: {
    tvShows: [],
    success: "",
    error: "",
  },
  reducers: {
    tvShowsRecieved: (tvShows, { payload }) => {
      tvShows.tvShows = payload.data;
    },
    tvShowRated: (tvShows, { payload }) => {
      tvShows.tvShows = payload.data;
      tvShows.success = "Thank you!";
    },

    //Resets all error messages left behind. Dispatch on onmount.
    messageReset: (tvShows, { payload }) => {
      tvShows.success = "";
      tvShows.error = "";
    },

    gotError: (tvShows, { payload }) => {
      console.log(payload);
      tvShows.error = payload;
    },
  },
});

export const getTvShows = (url, method, data) => (dispatch, getState) => {
  dispatch(
    apiRequestStarted({
      url,
      method,
      data,
      onSuccess: tvShowsRecieved.type,
      onError: gotError.type,
    })
  );
};

export const searchTvShows = (url, method, data) => (dispatch, getState) => {
  dispatch(
    apiRequestStarted({
      url,
      method,
      data,
      onSuccess: tvShowsRecieved.type,
      onError: gotError.type,
    })
  );
};

export const rateTvShow = (url, method, data) => (dispatch, getState) => {
  dispatch(
    apiRequestStarted({
      url,
      method,
      data,
      onSuccess: tvShowRated.type,
      onError: gotError.type,
    })
  );
};
export const { tvShowsRecieved, tvShowRated, gotError, messageReset } = slice.actions;
export default slice.reducer;
