import React, { Component } from 'react';
import Ball from './Ball2';

function getWinNumbers() {
 console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i)=> i + 1);
  const shuffle = [];
  while (candidate.length > 0){
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

class Lotto extends Component {
  state = {
    winNumbers: getWinNumbers(), // 당첨 숫자들
    winBalls: [],
    bonus: null, // 보너스 공
    redo: false,
  };

  timeouts = [];

  runTimeouts = () => {
    //console.log('runTimeouts');
    const { winNumbers } = this.state;
    for (let i = 0; i < winNumbers.length - 1; i++) {
      this.timeouts[i] = setTimeout(() => {
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]],
          };
        });
      }, (i + 1) * 400);
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonus: winNumbers[6],
        redo: true,
      });
    }, 3000);
  };

  componentDidMount() {
    console.log('didMount');
    this.runTimeouts();
    console.log('didMount - 로또 숫자를 생성합니다.');
  }

  //onClickRedo -> state 초기화(리렌더링) -> componentDidUpdate 반복
  componentDidUpdate(prevProps, prevState) {
    console.log('didUpdate');
    const { winBalls, winNumbers } = this.state;
    if (winBalls.length === 0) {
      this.runTimeouts();
      console.log('didUpdate - runTimeouts()');
    }
    if (prevState.winNumbers !== winNumbers) {
      console.log('didUpdate = 로또 숫자를 생성합니다.');
    }
  } 

  //만일 컴포넌트가 제거될때 이벤트를 제거해주기 위해
  componentWillUnmount() {
    this.timeouts.forEach((v) => {
      clearTimeout(v);
    });
  }

  onClickRedo = () => {
    //console.log('onClickRedo');
    this.setState({
      winNumbers: getWinNumbers(), // 당첨 숫자들
      winBalls: [],
      bonus: null, // 보너스 공
      redo: false,
    });
    this.timeouts = [];
    //this.runTimeouts();
  };

  render(){
    const { winBalls, bonus, redo } = this.state;
    return (
      <>
        <div>당첨 숫자</div>
        <div id="결과창">
          {winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
      </>
    );
  };
}

export default Lotto;