import React, { Component } from 'react';
import Try from './TryClass';

//숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
function getNumbers(){
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = [];
  for (let i = 0; i < 4; i+=1){
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

//array 에서 push를 이용해서 satate를 직접적으로 수정 하지 않는다
const a = [];
const b = [...a, 2,2,3]; //원본 a를 수정하지 않고 복사하고 새로운거 넣기
console.log(b);

class NumberBaseballClass extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [], 
  };
  
  onSubmitForm = (e) => {
    e.prevenDefault();
    if(this.state.value === this.state.answer.join('')){
      this.setState({
        result: '홈런!',
        tries: [...this.state.tries, {try: this.state.value, result: '홈런!'}],
      });
    }
    else{
      
    }
  };
  
  onChangeInput = (e) => {
    console.log(this.state.value);
    this.setState({
      value: e.target.value,
    });
  };

  fruits = [
    {fruit: '사과', taste: '맛있다'},
    {fruit: '사과222', taste: '맛있다'},
    {fruit: '사과323', taste: '맛있다'},
    {fruit: '사과423', taste: '맛있다'},
    {fruit: '사과345', taste: '맛있다'},
  ];

  render() {
    return(
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input type="number" maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        {/* <ul>
          {['like1','like2','like3','like4'].map((v)=>{
            return(
              <li>{v}</li>
            );
          })}
        </ul> */}

        <ul>
          {this.fruits.map((v, i) => {
            //return <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {v.taste}</li>
            return <Try key={v.fruit + v.taste} v={v} i={i} />
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseballClass;