import { useState } from "react";
import Image from "next/image";
import { Typography, Button, Grid, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { cartArray } from "../pages/cart";

export default function CartItem(props) {
  const [itemQuantity, setItemQuantity] = useState(props.item.quantity);

  const increaseQuantity = () => {
    const index = cartArray.findIndex((item) => item.name === props.item.name);
    if (index >= 0) {
      cartArray[index].quantity += 1;
      setItemQuantity(itemQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    const index = cartArray.findIndex((item) => item.name === props.item.name);
    if (index >= 0) {
      cartArray[index].quantity -= 1;
      if (cartArray[index].quantity === 0) {
        cartArray.splice(index, 1);
      }
    }

    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  return (
    <Grid style={{ width: "100%" }} item>
      <div style={{ display: "flex" }}>
        <Image src={props.item.image} alt="product" width={150} height={150} />
        <div style={{ margin: "2%" }}>
          <Typography variant="h6">{props.item.name}</Typography>
          <Typography variant="subtitle1">{itemQuantity}</Typography>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button onClick={decreaseQuantity} endIcon={<ClearIcon />}>
          Remove
        </Button>
      </div>
    </Grid>
  );
}

const styles = {
  itemActions: {
    border: "solid 1px white",
    padding: "1%",
  },
};
