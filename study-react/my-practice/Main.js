import React from 'react';
import PracticeCheckbox from './pages/PracticeCheckbox';
import PracticeRadio from './pages/PracticeRadio';
import PracticeButton from './pages/PracticeButton';
import PracticeContext from './pages/PracticeContext';
import PracticeRedux from './pages/PracticeRedux';
import PracticeAccordion from './pages/PracticeAccordion';

const Main = () => {
  return (
    <div className="wrap">
      <PracticeAccordion />
      <hr /><br /><br /><hr />
      <PracticeRedux />
      <hr /><br /><br /><hr />
      <PracticeContext />
      <hr /><br /><br /><hr />
      <PracticeButton />
      <hr /><br /><br /><hr />
      <PracticeRadio />
      <hr /><br /><br /><hr />
      <PracticeCheckbox />
    </div>
  );
};

export default Main;






