import React, { useState } from 'react';
import Counter from './Counter';
import Counter2 from './Counter2';
import Info from './Info';
import Average from './Average';
import ContextSample from './ContextSample';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Counter />
            
      <br />
      <hr />
      <br />

      <Counter2 />

      <br />
      <hr />
      <br />
      
      <button onClick={() => { setVisible(!visible); }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <Info />}
      
      <br />
      <hr />
      <br />

      <ContextSample />

      <br />
      <hr />
      <br />

      <Info />

      <br />
      <hr />
      <br />

      <Average />

      <br />
      <hr />
      <br />

    </div>
  );
};

export default App;