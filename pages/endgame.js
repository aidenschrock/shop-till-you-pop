import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function EndGame() {
  const router = useRouter();

  const [didPass, setDidPass] = useState(false);
  const total = 120;

  if (total < 100 && !didPass) {
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
      <Typography variant="h3">{didPass ? "WOO!!" : "Oh No"}</Typography>
      <Typography sx={{ marginTop: "3%" }} variant="h5">
        Your total is ${total}
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
