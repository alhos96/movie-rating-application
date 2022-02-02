import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ViewAmountRibbon from "./ViewAmountRibbon";
import Loader from "../Loader";
import MovieCard from "../MovieCard";
import { getTvShows } from "../../store/tvShowsSlice";

function TvShowsList() {
  const dispatch = useDispatch();

  // global state
  const tvShows = useSelector(({ tvShows }) => tvShows.tvShows);

  // local state
  const [showsAmount, setShowsAmount] = useState(10);

  useEffect(() => {
    dispatch(getTvShows(`/api/tvShows/${showsAmount}`, "GET", {}));
  }, [showsAmount]);

  return (
    <>
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
                type={show.type}
                tvShowsAmount={showsAmount}
              />
            </Grid>
          ))
        ) : (
          <Loader message={"No shows!"} timeout={4000} />
        )}
      </Grid>
      {tvShows.length > 0 && <ViewAmountRibbon showAmount={showsAmount} setShowAmount={setShowsAmount} />}
    </>
  );
}

export default TvShowsList;
