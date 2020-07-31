const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
  console.log('렌더링');

  const [first, setFirst] = React.useState(Math.ceil(Math.random()*9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random()*9));
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const inputRef = React.useRef(null);
  
  const onChange = (e) => { 
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(parseInt(value) === first * second){
      setFirst(Math.ceil(Math.random()*9));
      setSecond(Math.ceil(Math.random()*9));
      setValue('');
      setResult((prevResult) => { return value + ' 정답' });
    }
    else{
      setValue('');
      setResult((prevResult) => { return value + ' 땡' });
    }
    inputRef.current.focus();
  }
  
  console.log('렌더링2');
  return (
    <>
      <div>{first} 곱하기 {second} 는?</div>
          <form onSubmit={onSubmit}>
            <label htmlFor="inf" className="inf">입력 : </label>
            <input id="inf" type="number" value={value} onChange={onChange} ref={inputRef} />  
            <button>입력!</button>
          </form>
          <div>{result}</div>
    </>
  );
};

module.exports = GuGuDan;
