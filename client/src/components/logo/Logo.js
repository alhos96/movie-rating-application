import "./logo.css";
import { Box } from "@mui/material";
import logo from "../../assets/images/logo.svg";

function Logo() {
  return (
    <Box className={`Logo-wrapp`}>
      <img className="logo" src={logo} alt="logo" />
    </Box>
  );
}

export default Logo;
