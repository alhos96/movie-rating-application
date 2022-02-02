import React from "react";
import MovieCard from "../MovieCard";
import { Grid } from "@mui/material";
import Loader from "../Loader";
import { useSelector } from "react-redux";

function MoviesList() {
  const movies = useSelector(({ movies }) => movies.movies);

  return (
    <Grid container spacing={2}>
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <MovieCard
              image={movie.image}
              release={movie.release}
              title={movie.title}
              id={movie._id}
              rating={movie.averageRating}
              description={movie.description}
            />
          </Grid>
        ))
      ) : (
        <Loader message={"No movies!"} timeout={4000} />
      )}
    </Grid>
  );
}

export default MoviesList;
