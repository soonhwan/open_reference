import React, { useCallback } from 'react';
import Button from '../components/Button';

const PracticeButton = () => {
  const onClick = useCallback((e) => {
    console.log('onClick = ', e);
  }, []);

  return (
    <>
      <h1>Button sample</h1>
      <Button className="btn-st1" onClick={onClick}>Default</Button>
      <Button className="btn-st1" onClick={onClick} type="submit">type submit</Button>
      <Button className="btn-st1" onClick={onClick} id="btn-default">Default ID</Button>
      <Button className="btn-st1" disabled>Disabled</Button>
      <Button className="btn-st1" onClick={onClick}>Button sty2</Button>
      <Button className="btn-st1" onClick={onClick}><span className="makeClassName">Button sty3(customized)</span></Button>
      <br />
      <br />
      <Button className="btn-st1" href="#section02" onClick={onClick}>Link</Button>
      <Button className="btn-st1" href="/" target="_blank" onClick={onClick}>Link target</Button>
      <Button className="btn-st1" href="#section03" onClick={onClick}><span className="makeClassName">Link sty2(customized)</span></Button>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default PracticeButton;






