import { useState } from "react";
import useInterval from "use-interval";

function Timer() {
  const [remainingTime, setRemainingTime] = useState(120);

  useInterval(() => {
    setRemainingTime(remainingTime - 1);
  }, 0);
  return <>{remainingTime}</>;
}

export default Timer;
