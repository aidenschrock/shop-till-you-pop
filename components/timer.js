import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useRouter } from "next/router";

export default function Timer(props) {
  const router = useRouter();

  const [seconds, setSeconds] = useState(25);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    props.gameStatus(!isActive);
  }, [props, isActive]);

  function toggle() {
    setIsActive(!isActive);
  }

  const padTime = (time) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };

  const format = (time) => {
    // Convert seconds into minutes and take the whole part
    const minutes = Math.floor(time / 60);

    // Get the seconds left after converting minutes
    const seconds = time % 60;

    //Return combined values as string in format mm:ss
    return `${minutes}:${padTime(seconds)}`;
  };

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 10) {
      clearInterval(interval);
    } else if (seconds === 0) {
      router.push("/endgame");
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, seconds, router]);

  return (
    <div style={{ display: "flex", alignItems: "center", margin: "1%" }}>
      <IconButton
        onClick={toggle}
        color="primary"
        aria-label="upload picture"
        component="span"
      >
        {isActive ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>

      {seconds === 0 ? "Time over" : <div>{format(seconds)}</div>}
    </div>
  );
}
