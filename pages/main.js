import { Typography, Button, Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import AppHeader from "../components/appHeader";
import ItemCard from "../components/itemCard";
import { useState, useEffect } from "react";
import { fetchProducts, fetchProductsByCategory } from "../lib/apiClient";

function Main() {
  const router = useRouter();
  const category = router.query.category;

  const [productArray, setProductArray] = useState();
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGamePaused, setIsGamePaused] = useState(false);

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
      <AppHeader gameStatus={setIsGameStarted} gamePaused={setIsGamePaused} />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}
      >
        <Grid container sx={{ width: "90vw" }} spacing={2}>
          {productArray
            ? productArray.map((item, index) => {
                return (
                  <ItemCard
                    gameStatus={isGameStarted}
                    gamePaused={isGamePaused}
                    key={index}
                    data={item}
                  />
                );
              })
            : "oh no spagetti os"}
        </Grid>
      </div>
    </div>
  );
  return <div></div>;
}

export default Main;
