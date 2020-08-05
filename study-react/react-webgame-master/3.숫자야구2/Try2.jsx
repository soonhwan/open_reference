import React, { memo } from 'react';

const Try = memo(({tryInfo}) => {
  // tryInfo.try = 'hello'; <- props를 직접 절대 바꾸면 안된다.
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

export default Try;