import React, { useState, useCallback } from 'react';
import Accordion from '../components/accordion/Accordion';
import AccordionList from '../components/accordion/AccordionList';
import AccordionHeader from '../components/accordion/AccordionHeader';
import AccordionCont from '../components/accordion/AccordionCont';

const PracticeAccordion = () => {
  return (
    <>
      <h1>Accordion sample</h1>
      <Accordion activeIndex={[1]} exclusive={false}>
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
    </>
  );
};

export default PracticeAccordion;






