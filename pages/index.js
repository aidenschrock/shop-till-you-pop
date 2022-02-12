import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import animation from "../lotties/homeAnimation.json";

export default function Home() {
  const router = useRouter();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Shop Till You Pop</title>
        <meta
          name="description"
          content="A time-limited game that tests your ability to shop within a budget."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h1">Shop Till You POP</Typography>

        <Typography variant="h6" sx={{ margin: "2em 0" }}>
          A game that simulates the stress of grocery shopping.
        </Typography>
        <div className={styles.animationStyle}>
          <Lottie options={defaultOptions} />
        </div>

        <Button onClick={() => router.push("/main")} variant="outlined">
          Continue as Guest
        </Button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
