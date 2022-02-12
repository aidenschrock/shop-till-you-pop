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
import apple from "../public/apple.png";
import { useState, useEffect } from "react";
import { Add, Remove } from "@mui/icons-material";
import cartArray from "./cartArray";

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
    for (let i = 0; i < cartArray.length; i++) {
      if (cartArray[i].item === props.data.name) {
        setItemQuantity(cartArray[i].quantity);
        return;
      }
    }
  }, [itemQuantity, props.data.name]);

  const handleAddItem = (selectedItem) => {
    if (
      cartArray.filter(function (e) {
        return e.name === selectedItem;
      }).length > 0
    ) {
      let index = cartArray.findIndex((item) => item.name === selectedItem);

      cartArray[index].quantity += 1;
    } else {
      props.data["quantity"] = 1;
      cartArray.push(props.data);
    }
    setItemQuantity(itemQuantity + 1);
  };

  const handleRemoveItem = (selectedItem) => {
    if (
      cartArray.filter(function (e) {
        return e.name === selectedItem;
      }).length > 0
    ) {
      let index = cartArray.findIndex((item) => item.name === selectedItem);
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
        <CardContent sx={{ justifyContent: "center", width: "100%" }}>
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
