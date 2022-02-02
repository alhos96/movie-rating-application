import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../MovieCard";
import Loader from "../Loader";
import { getMovies } from "../../store/moviesSlice";
import ViewAmountRibbon from "./ViewAmountRibbon";

function MoviesList() {
  const dispatch = useDispatch();

  // global state
  const movies = useSelector(({ movies }) => movies.movies);

  // local state
  const [moviesAmount, setMoviesAmount] = useState(10);

  useEffect(() => {
    dispatch(getMovies(`/api/movies/${moviesAmount}`, "GET", {}));
  }, [moviesAmount]);

  return (
    <>
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
                type={movie.type}
              />
            </Grid>
          ))
        ) : (
          <Loader message={"No movies!"} timeout={4000} />
        )}
      </Grid>
      {movies.length > 0 && <ViewAmountRibbon showAmount={moviesAmount} setShowAmount={setMoviesAmount} />}
    </>
  );
}

export default MoviesList;
