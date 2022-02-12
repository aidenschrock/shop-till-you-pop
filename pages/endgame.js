import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import failAnimation from "../lotties/failAnimation.json";
import passAnimation from "../lotties/passAnimation.json";
import cartArray from "../components/cartArray";

export default function EndGame() {
  const router = useRouter();

  const failOptions = {
    loop: false,
    autoplay: true,
    animationData: failAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const passOptions = {
    loop: false,
    autoplay: true,
    animationData: passAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [didPass, setDidPass] = useState(false);

  let total = 0;

  for (let i = 0; i < cartArray.length; i++) {
    let price = Number(cartArray[i].price) * cartArray[i].quantity;
    total += price;
  }

  if (total <= 100 && !didPass) {
    setDidPass(true);
  } else if (total > 100 && didPass) {
    setDidPass(false);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h2">GAME OVER</Typography>
      <Typography variant="h3">
        {didPass ? (
          <div>
            <Lottie options={passOptions} />
            WOO!!
          </div>
        ) : (
          <div>
            <Lottie options={failOptions} />
            Oh No
          </div>
        )}
      </Typography>
      <Typography sx={{ marginTop: "3%" }} variant="h5">
        Your total is ${total.toFixed(2)}
      </Typography>
      {!didPass
        ? "You overcharged your card and now you're being hunted by the FBI. "
        : null}
      <Button
        onClick={() => router.push("/main")}
        sx={{ marginTop: "3%" }}
        variant="contained"
      >
        Play Again
      </Button>
    </div>
  );
}
