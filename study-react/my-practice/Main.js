import React from 'react';
import PracticeCheckbox from './PracticeCheckbox';
import PracticeRadio from './PracticeRadio';
import PracticeButton from './PracticeButton';
import PracticeContext from './PracticeContext';
import PracticeRedux from './PracticeRedux';
import PracticeAccordion from './PracticeAccordion';

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






