import React, { Component, createRef } from 'react';
import Try from './TryClass';

//숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
function getNumbers() {
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

//array 에서 push를 이용해서 state를 직접적으로 수정 하지 않는다
const a = [];
const b = [...a, 2,2,3]; //원본 a를 수정하지 않고 복사하고 새로운거 넣기
const c = [...a, {a:1, b:2}]; // ...(스프레드 연산자)
console.log(b);
console.log(c);

class NumberBaseballClass extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [], 
  };
  
  onSubmitForm = (e) => {
    const { value, tries, answer } = this.state;
    e.preventDefault();
    if (value === answer.join('')) {
      //옛날값으로 현재값을 만들때는 prevState 사용해라
      this.setState((prevState) => {
        return {
          result: '홈런!',
          tries: [...prevState.tries, { try: value, result: '홈런!' }],
        }
      });
      alert('게임을 다시 시작합니다!');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: [],
      });
    } else { // 답 틀렸으면
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) { // 10번 이상 틀렸을 때
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState((prevState) => {
          return {
            tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
            value: '',
          };
        });
      }
    }
    this.inputRef.current.focus();
  };

  onChangeInput = (e) => {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };

  inputRef = createRef(); // this.inputRef

  fruits = [
    {fruit: '사과', taste: '맛있다'},
    {fruit: '사과222', taste: '맛있다'},
    {fruit: '사과323', taste: '맛있다'},
    {fruit: '사과423', taste: '맛있다'},
    {fruit: '사과345', taste: '맛있다'},
  ];

  render() {
    const { result, value, tries } = this.state; //비구조화 할당
    return(
      <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.inputRef} maxLength={4} value={value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return (
              <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
            );
          })}
        </ul>

        {/* <ul>
          {['like1','like2','like3','like4'].map((v)=>{
            return(
              <li>{v}</li>
            );
          })}
        </ul> */}

         {/* <ul>
          {this.fruits.map((v, i) => {
            //return <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste}</li>
            return <Try key={v.fruit + v.taste} v={v} i={i} />
          })}
        </ul> */}
      </>
    );
  }
}

export default NumberBaseballClass;