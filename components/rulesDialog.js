import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const startGame = () => {
    props.gameStatus(true);
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Start Game
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Rules"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The goal of the game is to fill your cart with as many items as
            possible before the time limit runs out without going over $100! No
            prices are shown for the items, so you&apos;ll have to make an
            educated guess based on your experience grocery shopping. You only
            have twenty seconds, so go fast!
          </DialogContentText>
          <br />
          <DialogContentText>Are you ready?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Not Yet
          </Button>
          <Button onClick={startGame} autoFocus>
            Start Game
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
