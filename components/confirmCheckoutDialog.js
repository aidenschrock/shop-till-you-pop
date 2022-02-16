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
import { useRouter } from "next/router";
import { cartArray } from "../pages/cart";

export default function CheckoutDialog(props) {
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const endGame = () => {
    router.push("/endgame");
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Checkout
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
            Are you sure you want to checkout? This will end the game.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={endGame} autoFocus>
            Checkout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
