interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: number
}

const Input = ({ onChange, value }: InputProps) => {
  return (
    <input
      className="border rounded-full p-2 mb-6 w-full text-center"
      type="number"
      placeholder="Enter time in seconds"
      onChange={ onChange }
      value={ value }
    />
  )
}

export { Input }