import { useEffect, useState } from "react";

export const useCountdown = (time: number) => {
  const [isActive, setIsActive] = useState(false)
  const [seconds, setSeconds] = useState(time)

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    if (seconds === 0) {
      setIsActive(false)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive, seconds])

  const start = () => setIsActive(true)
  const pause = () => setIsActive(false)
  const reset = () => {
    setSeconds(time)
    setIsActive(false)
  }

  return { seconds, isActive, start, pause, reset, setSeconds }
}