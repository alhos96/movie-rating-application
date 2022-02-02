import { Divider, ButtonGroup, Button } from "@mui/material";

function ViewAmountRibbon({ showAmount, setShowAmount }) {
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
