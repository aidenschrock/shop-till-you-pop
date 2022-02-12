import AppHeader from "../components/appHeader";
import CartItem from "../components/cartItem";
import { Grid, Typography, Button } from "@mui/material";
import CheckoutDialog from "../components/confirmCheckoutDialog";
import cartArray from "../components/cartArray";

export default function Cart() {
  return (
    <div>
      <AppHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3%",
        }}
      >
        <Grid container sx={{ width: "60vw" }} spacing={2} direction="column">
          {cartArray.map((data, index) => {
            return <CartItem key={index} item={data} />;
          })}
        </Grid>
        <div>
          <Typography styles={{ marginBottom: "5%" }} variant="h6">
            Total: ?????
          </Typography>
          <CheckoutDialog />
        </div>
      </div>
    </div>
  );
}
