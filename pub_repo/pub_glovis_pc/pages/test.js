import { useState } from 'react';
import Input from '@lib/share/Input';

const Index = () => {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [errorMsg, setErrorMsg] = useState(false)
  const handleChange = (e) => {
    //setVal1(e.target.value)
    console.log(e.target.value);
  }

  const handleChange1 = (e) => {
    //setVal2(e.target.value)
    console.log(e.target.value);
  }

  return (
    <div>
      <Input onChange={handleChange} />
      {errorMsg && 
        <p>그거아니야</p>
      }
      <Input onChange={handleChange1} />


    </div>
  )
}

export default Index;
