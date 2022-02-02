import React from "react";
import MovieCard from "../MovieCard";
import { Grid } from "@mui/material";
import Loader from "../Loader";
import { useSelector } from "react-redux";

function TvShowsList() {
  const tvShows = useSelector(({ movies }) => movies.tvShows);

  return (
    <Grid container spacing={2}>
      {tvShows.length > 0 ? (
        tvShows.map((show, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <MovieCard
              image={show.image}
              description={show.description}
              release={show.release}
              title={show.title}
              id={show._id}
              rating={show.averageRating}
            />
          </Grid>
        ))
      ) : (
        <Loader message={"No shows!"} timeout={4000} />
      )}
    </Grid>
  );
}

export default TvShowsList;
