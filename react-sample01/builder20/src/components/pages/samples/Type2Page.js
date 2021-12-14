import React from 'react';
import { Type2Template, SortingBar } from 'components'

const Type2Page = () => {

  const mainList5 = [{ text: 'YYYY.MM.DD - YYYY.MM.DD', value: '' }]
  const subList5 = [
    { text: '기간선택', value: 'opt-1', }
  ]
  return (
    <Type2Template>
      <div className="Type2Page">
        <h1>Type2Page</h1>

        <SortingBar mode="datePicker" mainOptions={mainList5} subOptions={subList5} subValue="opt-2" />
      </div>
    </Type2Template>
  );
};

export default Type2Page;
