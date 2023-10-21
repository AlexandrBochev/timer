import { Button } from "../Button/Button"
import { Close } from "../icons/Close"


interface ModalProps {
  onClick: () => void
}

const Modal = ({ onClick }: ModalProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      <div onClick={ onClick } className="absolute top-0 left-0 w-full h-full bg-black opacity-75" />
      <div className="p-10 bg-white z-10 rounded-md text-center">
        <h2 className="text-4xl font-semibold mb-8">Time is up!</h2>
        <Button onClick={ onClick }><Close /></Button>
      </div>
    </div>
  )
}

export { Modal }