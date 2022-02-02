import { useEffect, useState } from "react";
import { Modal, Rating, Button, Typography, Zoom } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { rateMovie, messageReset } from "../store/moviesSlice";

function RateForm({ openModal, setOpenModal, description, rating, title, id, type }) {
  const dispatch = useDispatch();

  // global state
  const successMessage = useSelector(({ movies }) => movies.success);

  // local state
  const [userRating, setUserRating] = useState(0);

  // functions
  function rate() {
    dispatch(
      rateMovie(`/api/${type}s/rate/${id}`, "POST", {
        userRating,
      })
    );
  }

  function handleCloseModal() {
    setOpenModal(false);
    dispatch(messageReset());
  }

  // side effects
  useEffect(() => {
    setUserRating(0); //disable button
  }, [successMessage]);

  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <div className="modal-content">
        <Typography id="close-modal-icon" onClick={handleCloseModal}>
          x
        </Typography>

        <Typography gutterBottom className="details-title" color="white">
          {title}
          <span id="details-display-rating">
            <Rating size="small" readOnly value={rating}></Rating>
          </span>
        </Typography>

        <Typography gutterBottom color="white">
          {description}
        </Typography>

        <Zoom in={!!successMessage}>
          <Typography color="white" align="center">
            {successMessage}
          </Typography>
        </Zoom>

        <div className="rating">
          <span id="rating-label">What do you think? </span>
          <Rating readOnly={!!successMessage} onChange={(e) => setUserRating(e.target.value)} size="large"></Rating>
          <Button disabled={!userRating} onClick={rate} children={"Rate"} />
        </div>
      </div>
    </Modal>
  );
}

export default RateForm;

const style = {};
