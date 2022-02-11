import Image from "next/image";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Grid,
} from "@mui/material";
import apple from "../public/apple.png";

function ItemCard() {
  return (
    <Grid item xs={6} md={2}>
      <Card sx={{ margin: "2%" }} variant="elevation">
        <CardContent sx={{ justifyContent: "center", width: "100%" }}>
          <Image src={apple} alt="apple" layout="responsive" />
          <Typography variant="h6">Item Title</Typography>
          <Typography variant="subtitle2">Item Description</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button>Add</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ItemCard;
