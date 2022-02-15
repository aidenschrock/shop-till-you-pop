import Image from "next/image";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Grid,
  IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Add, Remove } from "@mui/icons-material";
import { cartArray } from "../pages/cart";

function ItemCard(props) {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (!props.gameStatus || (props.gameStatus && props.gamePaused)) {
      setIsButtonDisabled(true);
    } else if (props.gameStatus && !props.gamePaused) {
      setIsButtonDisabled(false);
    }
  }, [props]);

  useEffect(() => {
    const item = cartArray.find((item) => item.name === props.data.name);
    if (item) {
      setItemQuantity(item.quantity);
    }
  }, [itemQuantity, props.data.name]);

  const handleAddItem = (selectedItem) => {
    const index = cartArray.findIndex((item) => item.name === selectedItem);
    if (index >= 0 && cartArray[index].quantity < 10) {
      cartArray[index].quantity += 1;
    } else if (index >= 0 && cartArray[index].quantity === 10) {
      return;
    } else {
      props.data["quantity"] = 1;
      cartArray.push(props.data);
    }

    setItemQuantity(itemQuantity + 1);
  };

  const handleRemoveItem = (selectedItem) => {
    const index = cartArray.findIndex((item) => item.name === selectedItem);
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
    <Grid item xs={6} md={2}>
      <Card sx={{ margin: "2%" }} variant="elevation">
        <CardContent
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Image
            src={props.data.image}
            alt="item image"
            height={200}
            width={200}
          />
          <div style={{ maxHeight: "60px", overflow: "hidden" }}>
            <Typography variant="subtitle1">{props.data.name}</Typography>
          </div>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          {itemQuantity < 1 ? (
            <Button
              disabled={isButtonDisabled}
              onClick={() => {
                handleAddItem(props.data.name);
              }}
            >
              Add
            </Button>
          ) : (
            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <IconButton
                onClick={() => {
                  handleRemoveItem(props.data.name);
                }}
              >
                <Remove />
              </IconButton>
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                }}
              >
                {itemQuantity}
              </div>

              <IconButton
                disabled={itemQuantity >= 10}
                onClick={() => {
                  handleAddItem(props.data.name);
                }}
              >
                <Add />
              </IconButton>
            </div>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ItemCard;
