interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  isActive?: boolean
  reset?: boolean
}

const Button = ({ children, onClick, isActive, reset }: ButtonProps) => {
  let btnStyles = ""
  if (reset) {
    btnStyles = "text-white rounded-full p-4 bg-red-400 hover:bg-red-500"
  } else {
    btnStyles = `text-white rounded-full p-4 " ${isActive ? "bg-yellow-400 hover:bg-yellow-500" : "bg-green-400 hover:bg-green-500"}`
  }

  return (
    <button onClick={ onClick } className={ btnStyles }>
      { children }
    </button>
  )
}

export { Button }