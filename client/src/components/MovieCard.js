import React, { useState, useEffect } from "react";
import { Fade, Rating, Typography } from "@mui/material";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";
import RateForm from "./RateForm";
import noimage from "../assets/images/noImage.png";

function MovieCard({ title, release, image, id, rating }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  //napraviti formu za ocjenjivanje filma. Napraviti popper

  return (
    <Fade in={fade} timeout={{ enter: 2500 }}>
      <div>
        <RateForm />
        <div className="movie-card-wrapp">
          <div className="rate-icon-wrapp">
            <StarRateOutlinedIcon className="rate-icon" />
          </div>

          <img
            id={id}
            className="movie-card"
            src={image || noimage}
            onError={(e) => {
              e.target.src = noimage;
            }}
            width="100%"
            height="100%"
          />
        </div>

        <div className="rating">
          <Rating readOnly defaultValue={rating}></Rating>
        </div>
      </div>
    </Fade>
  );
}

export default MovieCard;
