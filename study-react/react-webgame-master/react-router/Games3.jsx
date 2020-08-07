import React from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';
import NumberBaseball from '../3.숫자야구2/NumberBaseballClass';
import RSP from '../5.가위바위보2/RSPClass';
import Lotto from '../6.로또2/LottoClass';

const Games = () => {
  return (
    <HashRouter>
      <div>
        <Link to="/game/number-baseball">숫자야구</Link>
        &nbsp;
        <Link to="/game/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/game/lotto-generator">로또생성기</Link>
        &nbsp;
        <Link to="/game/index">게임 매쳐</Link>
      </div>
      <div>
        <Route path="/game/number-baseball" component={NumberBaseball} />
        <Route path="/game/rock-scissors-paper" component={RSP} />
        <Route path="/game/lotto-generator" component={Lotto} />
      </div>
    </HashRouter>
  );
};

export default Games;
