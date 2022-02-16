import AppHeader from "../components/appHeader";
import CartItem from "../components/cartItem";
import { Grid, Typography, Button } from "@mui/material";
import CheckoutDialog from "../components/confirmCheckoutDialog";
import { useState } from "react";
import Head from "next/head";

export const cartArray = [];

export default function Cart() {
  const [isGameStarted, setIsGameStarted] = useState();
  const [isGamePaused, setIsGamePaused] = useState();

  return (
    <div>
      <Head>
        <title>Cart</title>
        <meta
          name="description"
          content="View your shopping cart and checkout"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader gameStatus={setIsGameStarted} gamePaused={setIsGamePaused} />
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
