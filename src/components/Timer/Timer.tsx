import { useEffect, useState } from "react"
import { Input } from "../Input/Input"
import { useCountdown } from "../../hooks/Сountdown"
import { Button } from "../Button/Button"
import { Play } from "../icons/Play"
import { Pause } from "../icons/Pause"
import { Reset } from "../icons/Reset"
import { Modal } from "../Modal/Modal"

const Timer = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [time, setTime] = useState(
    localStorage.getItem("time") ? Number(localStorage.getItem("time")) : 60
  )
  const { seconds, isActive, start, pause, reset, setSeconds } = useCountdown(time)

  useEffect(() => {
    localStorage.setItem("time", time.toString())
  }, [time])

  if (seconds === 0) {
    setModalOpen(true)
    reset()
  }

  const formatTime = (time: number) => {
    const m = Math.floor(time / 60)
    const s = time % 60
    const mStr = m < 10 ? `0${m}` : m
    const sStr = s < 10 ? `0${s}` : s
    return `${mStr}:${sStr}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) {
      alert("Please enter a positive number")
      e.target.value = ""
    } else {
      setSeconds(Number(e.target.value))
      setTime(Number(e.target.value))
    }
  }

  const countStyles = isActive ? "text-yellow-500" : "text-gray-400"

  return (
    <div className="flex justify-center items-center flex-col bg-slate-100 border p-10 rounded-xl">
      { modalOpen && <Modal onClick={ ()=> setModalOpen(prev => !prev) } /> }
      <h1 className="font-semibold text-xl mb-4">TIMER</h1>
      <Input onChange={ handleChange } />
      <p className={`font-bold text-7xl mb-6 ${ countStyles }`}>{ formatTime(seconds) }</p>
      <div className="w-full flex justify-between">
        <Button onClick={ () => isActive ? pause() : start() } isActive={ isActive }>
          { isActive ? <Pause /> : <Play /> }
        </Button>
        <Button onClick={ ()=> reset() } isActive={ isActive } reset={ true }>
          <Reset />
        </Button>
      </div>
    </div>
  )
}

export { Timer }