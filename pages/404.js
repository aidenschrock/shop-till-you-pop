import { Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import animation from "../lotties/404Animation.json";

function Page404() {
  const router = useRouter();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={style.container}>
      <Typography variant="h3">Uh Oh! There&apos;s nothing here!</Typography>
      <div>
        <Lottie options={defaultOptions} />
      </div>

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
    margin: "2%",
    textAlign: "center",
  },
  image: {
    height: "400px",
    margin: "2%",
  },
};

export default Page404;
