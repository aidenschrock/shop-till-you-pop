import { Typography, Button, Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import AppHeader from "../components/appHeader";
import ItemCard from "../components/itemCard";

const productArray = [
  "Apple",
  "Orange",
  "Banana",
  "Hot Dogs",
  "Ground Beef",
  "Milk",
];
function Main() {
  return (
    <div>
      <AppHeader />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}
      >
        <Grid container sx={{ width: "90vw" }} spacing={2}>
          {productArray.map((item, index) => {
            return <ItemCard key={index} data={item} />;
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Main;
