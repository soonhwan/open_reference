import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
//import GameMatcher from './GameMatcher2';
import GameMatcher from './GameMatcher';

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/number-baseball?query=10&hello=zerocho&bye=react">숫자야구</Link>
        &nbsp;
        <Link to="/game/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/game/lotto-generator">로또생성기</Link>
        &nbsp;
        <Link to="/game/index">게임 매쳐</Link>
      </div>
      <div>
        {/* <Route path="/game/:name" component={GameMatcher} /> */}
        
        {/* 동시 route 중에 우선순위 매치되는 것으로 사용하고 싶다면 Switch */}
        <Switch>
          {/* exact 는 path 와 정확히 일치하는것 */}
          <Route exact path="/" render={(props) => <GameMatcher {...props} />} />
          <Route path="/game/:name" render={(props) => <GameMatcher {...props} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Games;
