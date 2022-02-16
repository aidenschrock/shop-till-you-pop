import { Button, Typography, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import failAnimation from "../lotties/failAnimation.json";
import passAnimation from "../lotties/passAnimation.json";
import { cartArray } from "../pages/cart";
import Leaderboard from "../components/leaderboard";
import { TimeLeft } from "../components/timer";
import Head from "next/head";
import LeaderboardConfirmResults from "../components/leaderboardConfirmResults";

export default function EndGame() {
  const router = useRouter();
  const [didPass, setDidPass] = useState(false);
  const [isLeaderboardShown, setIsLeaderboardShown] = useState(false);

  let total = 0;

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

  const resetGame = () => {
    cartArray.length = 0;
    router.push("/main");
  };

  for (let i = 0; i < cartArray.length; i++) {
    let price = Number(cartArray[i].price) * cartArray[i].quantity;
    total += price;
  }

  if (total <= 100 && total > 0 && !didPass) {
    setDidPass(true);
  } else if ((total > 100 || total === 0) && didPass) {
    setDidPass(false);
  }
  let score = 0;
  if (TimeLeft > 0) {
    score = Math.round(((total * TimeLeft) / 20) * 10);
  } else {
    score = Math.round((total / 20) * 10);
  }

  useEffect(() => {
    if (didPass) {
      setIsLeaderboardShown(false);
    } else if (!didPass) {
      setIsLeaderboardShown(true);
    }
  }, []);

  return (
    <Grid
      container
      sx={{ minHeight: "100vh" }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Head>
        <title>EndGame</title>
        <meta
          name="description"
          content="See your score and how it compares to other players."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        container
        md={4}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        <Typography variant="h2">GAME OVER</Typography>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            margin: "2%",
          }}
        >
          {didPass ? (
            <div className="animationContainer">
              <Lottie options={passOptions} />
              <Typography variant="h3">WOO!!</Typography>
            </div>
          ) : (
            <div className="animationContainer">
              <Lottie options={failOptions} />
              <Typography variant="h3">Oh No</Typography>
            </div>
          )}
        </div>
        <Typography sx={{ marginTop: "3%" }} variant="h5">
          Your total is ${total.toFixed(2)}
          <br />
          {didPass ? <div>Your score is {score}</div> : null}
        </Typography>
        <div>
          {!didPass && total > 0
            ? "You overcharged your card and now you're being hunted by the FBI. "
            : null}
        </div>
        <Button
          onClick={() => {
            resetGame();
          }}
          sx={{ marginTop: "3%" }}
          variant="contained"
        >
          Play Again
        </Button>
      </Grid>
      <Grid item xs={11} md={5}>
        {isLeaderboardShown ? (
          <Leaderboard userScore={score} />
        ) : (
          <LeaderboardConfirmResults
            userScore={score}
            showBoard={setIsLeaderboardShown}
          />
        )}
      </Grid>
    </Grid>
  );
}
