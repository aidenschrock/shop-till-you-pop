import { useState } from "react";
import apple from "../public/apple.png";
import Image from "next/image";
import { Typography, Button, Grid, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function CartItem() {
  const [itemQuantity, setItemQuantity] = useState(1);

  const increaseQuantity = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  return (
    <Grid style={{ width: "100%" }} item>
      <div style={{ display: "flex" }}>
        <Image src={apple} alt="apple" width={150} height={150} />
        <div style={{ margin: "2%" }}>
          <Typography variant="h6">Item Title</Typography>
          <Typography variant="subtitle2">Item Description</Typography>
          <Typography variant="subtitle1">{itemQuantity}</Typography>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button endIcon={<ClearIcon />}>Remove</Button>
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
