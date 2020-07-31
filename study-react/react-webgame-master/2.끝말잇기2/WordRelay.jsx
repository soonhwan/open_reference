const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState('제로');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = React.useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setValue('');
      setResult('딩동댕');
    } else {
      setValue('');
      setResult('땡');
    }
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input value={value} onChange={onChangeInput} ref={inputRef} />
        <button>클릭!!!</button>
      </form>
      <div>{result}</div>
    </>
  );
}

module.exports = WordRelay;