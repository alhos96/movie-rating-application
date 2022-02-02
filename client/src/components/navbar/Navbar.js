import "./navbar.css";
import React, { useState, useEffect } from "react";
import { Fade, Grid } from "@mui/material";
import Logo from "../logo/Logo";
import SearchBar from "./SearchBar";

function Navbar({ setSearch }) {
  //local state
  const [fade, setFade] = useState(false);

  //side effects
  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <>
      <Fade in={fade} timeout={{ enter: 500 }}>
        <Grid container className="Navbar">
          <Grid item xs={12} lg={7}>
            <Logo className={"navbar-logo"} />
          </Grid>

          <Grid item xs={12} lg={5}>
            <SearchBar setSearch={setSearch} />
          </Grid>
        </Grid>
      </Fade>
    </>
  );
}

export default Navbar;
