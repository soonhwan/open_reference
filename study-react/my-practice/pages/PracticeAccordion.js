import React, { useState, useCallback } from 'react';
import Accordion from '../components/accordion/Accordion';
import AccordionList from '../components/accordion/AccordionList';
import AccordionHeader from '../components/accordion/AccordionHeader';
import AccordionCont from '../components/accordion/AccordionCont';

const PracticeAccordion = () => {
  return (
    <>
      <h1>Accordion sample</h1>
      <Accordion activeIndex={[0,2]} exclusive>
        <AccordionList>
          <AccordionHeader>제목1</AccordionHeader>
          <AccordionCont>내용1..<br />내용..<br />내용..</AccordionCont>
        </AccordionList>
        <AccordionList>
          <AccordionHeader>제목2</AccordionHeader>
          <AccordionCont>내용2..<br />내용..<br />내용..</AccordionCont>
        </AccordionList>
        <AccordionList>
          <AccordionHeader>제목3</AccordionHeader>
          <AccordionCont>내용3..<br />내용..<br />내용..</AccordionCont>
        </AccordionList>
      </Accordion>

      {/* <ul className="list-Accordion">
        <li className="on">
          <dl className="lm-box">
            <dt className="tit"><button>제목</button></dt>
            <dd className="cont">내용..<br />내용..<br />내용..</dd>
          </dl>
        </li>
        <li>
          <dl className="lm-box">
            <dt className="tit"><button>제목</button></dt>
            <dd className="cont">내용..<br />내용..<br />내용..</dd>
          </dl>
        </li>
      </ul> */}
    </>
  );
};

export default PracticeAccordion;






