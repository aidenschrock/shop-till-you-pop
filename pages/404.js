import { Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

function Page404() {
  const router = useRouter();

  return (
    <div style={style.container}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h5">Uh Oh! There&apos;s nothing here!</Typography>
      {/* <img
        style={style.image}
        src={page404Image}
        alt="man exiting portal spooks alien"
      /> */}

      <Button
        sx={{ marginTop: "3 %" }}
        onClick={() => router.push("/")}
        variant="outlined"
      >
        Go Back Home
      </Button>
    </div>
  );
}

const style = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "400px",
    margin: "2%",
  },
};

export default Page404;
