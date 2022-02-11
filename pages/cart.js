import AppHeader from "../components/appHeader";
import CartItem from "../components/cartItem";
import { Grid, Typography, Button } from "@mui/material";
import CheckoutDialog from "../components/confirmCheckoutDialog";

const cartArray = ["item1", "item2", "item3", "item4"];

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
          {cartArray.map((item, index) => {
            return <CartItem key={index} data={item} />;
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
