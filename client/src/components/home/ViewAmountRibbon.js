import { useEffect, useState } from "react";
import { Divider, ButtonGroup, Button, Fade } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { viewMore, viewLess } from "../../helpers/viewAmountFunctions";
import { getMovies } from "../../store/moviesSlice";

function ViewAmountRibbon({ showAmount, setShowAmount }) {
  const dispatch = useDispatch();

  // global state
  const tvShows = useSelector(({ movies }) => movies.tvShows);

  // functions

  function viewMore(setShowAmount) {
    setShowAmount((e) => e + 10);
  }

  function viewLess(showAmount, setShowAmount) {
    if (showAmount > 10) {
      setShowAmount((e) => e - 10);
    }
  }

  return (
    <Divider sx={{ mb: 2, mt: 2 }} textAlign="right">
      <ButtonGroup size="large">
        <Button onClick={() => viewMore(setShowAmount)}>view more</Button>
        <Button onClick={() => viewLess(showAmount, setShowAmount)} color="secondary">
          view less
        </Button>
      </ButtonGroup>
    </Divider>
  );
}

export default ViewAmountRibbon;
