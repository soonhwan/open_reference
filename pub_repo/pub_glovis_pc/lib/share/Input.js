import { useState } from 'react';

const Input = ({type = 'text', placeholder = '', onChange}) => {
  const [val, setVal] = useState('')
  const handleChange = (e) => {
    setVal(e.target.value)
    onChange(e);
  }
  return (
    <div>
      <input type={type} value={val} placeholder={placeholder} onChange={handleChange} />
    </div>
  )
}

export default Input