import { useEffect, useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";

function Loader({ message, timeout }) {
  const [content, setContent] = useState(<CircularProgress />);

  useEffect(() => {
    let informationForUser = setTimeout(() => {
      setContent(
        <>
          <Typography color={"text.secondary"}>{message}</Typography>
        </>
      );
    }, timeout);

    return () => {
      clearTimeout(informationForUser);
      setContent(<CircularProgress />);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ width: "100%", textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
      {content}
    </div>
  );
}

export default Loader;
