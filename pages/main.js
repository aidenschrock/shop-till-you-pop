import { Typography, Button, Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import AppHeader from "../components/appHeader";
import ItemCard from "../components/itemCard";
import { useState, useEffect } from "react";
import { fetchProducts, fetchProductsByCategory } from "../lib/apiClient";
import Head from "next/head";

function Main() {
  const router = useRouter();
  const category = router.query.category;

  const [productArray, setProductArray] = useState();
  const [isGameStarted, setIsGameStarted] = useState();
  const [isGamePaused, setIsGamePaused] = useState();

  useEffect(() => {
    if (category) {
      fetchProductsByCategory(category).then((products) =>
        setProductArray(products)
      );
    } else {
      fetchProducts().then((products) => setProductArray(products));
    }
  }, [category]);

  return (
    <div>
      <Head>
        <title>Main Shopping Area</title>
        <meta
          name="description"
          content="Start the game here and add items to your cart!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader gameStatus={setIsGameStarted} gamePaused={setIsGamePaused} />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "3% 0" }}
      >
        <Grid container sx={{ width: "90vw" }} spacing={2}>
          {productArray ? (
            productArray.map((item) => {
              return (
                <ItemCard
                  gameStatus={isGameStarted}
                  gamePaused={isGamePaused}
                  key={item.name}
                  data={item}
                />
              );
            })
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <p>Uh oh spagetti Os</p>
            </div>
          )}
        </Grid>
      </div>
    </div>
  );
}

export default Main;
