import React, { memo, useState, FC, useCallback, useEffect } from 'react';
import { CategoryNav, TopSellerCategory, TopSellerCategoryDepth2, Select, TopSellerList } from 'components';
import { TopSellerContainerWrap } from './TopSellerContainerStyles';
import listData from '../../../mockData/response_1644294867507.json'
//import categoryList from '../../../mockData/response_1644294867494.json'


const categoryList = {
  'data': [
    { text: 'ALL', value: 'opt-1' },
    { text: 'WOMEN', value: 'opt-2', categoryList: [
      {text: 'ALL', value: 'opt-2-1' },
      {text: 'APPAREL', value: 'opt-2-2' },
      {text: 'BAG', value: 'opt-2-3' },
      {text: 'SHOES', value: 'opt-2-4' },
      {text: 'ACC', value: 'opt-2-5' },
    ]},
    { text: 'MEN', value: 'opt-3', categoryList: [
      {text: 'ALL', value: 'opt-3-1' },
      {text: 'APPAREL', value: 'opt-3-2' },
      {text: 'BAG', value: 'opt-3-3' },
      {text: 'SHOES', value: 'opt-3-4' },
      {text: 'ACC', value: 'opt-3-5' },
    ]},
    { text: 'LIFE', value: 'opt-4', categoryList: [
      {text: 'ALL', value: 'opt-4-1' },
      {text: 'LIFEWEAR', value: 'opt-4-2' },
      {text: 'HOME', value: 'opt-4-3' },
      {text: 'TRAVEL', value: 'opt-4-4' },
      {text: 'DIGITAL', value: 'opt-4-5' },
      {text: 'PET', value: 'opt-4-6' },
      {text: 'GOODS', value: 'opt-4-7' },
    ]},
    { text: 'BEAUTY&', value: 'opt-5', categoryList: [
      {text: 'ALL', value: 'opt-5-1' },
      {text: 'FACIAL BEAUTY', value: 'opt-5-2' },
      {text: 'SALON BEAUTY', value: 'opt-5-3' },
      {text: 'SCENT BEAUTY', value: 'opt-5-4' },
      {text: 'INNER BEAUTY', value: 'opt-5-5' },
      {text: 'for MEN', value: 'opt-5-6' },
    ]},
  ]
}
const sortingList = [
  { text: '일간', value: 'opt-1'},
  { text: '주간', value: 'opt-2'},
  { text: '월간', value: 'opt-3'},
]

interface IProps {
  data?: any;
}

const TopSellerContainer: FC<IProps> = ({ data }) => {
  //list
  const [list, setList] = useState(listData.data);
  
  //category
  const [category, setCategory] = useState(categoryList.data);
  const [categoryDepth2, setCategoryDepth2] = useState(null);
  const [categoryValue, setCategoryValue] = useState('opt-1');
  const [categoryValueDepth2, setCategoryValueDepth2] = useState('');

  //sorting
  const [sorting, setSorting] = useState(sortingList);
  const [sortingValue, setSortingValue] = useState('opt-1');

  // EVENT HANDLER : onClickCategory
  const onClickCategory = useCallback((value) => {
    console.log('onClickCategory => ', value);
    setCategoryValue(value);
    if(value !== 'opt-1') {
      const listDepth2: any = category.find((item: any) => item.value === value);
      setCategoryDepth2(listDepth2.categoryList);
      setCategoryValueDepth2(listDepth2.categoryList[0].value);
    } else {
      setCategoryDepth2(null);
      setCategoryValueDepth2('');
    }
  }, [category]);

  // EVENT HANDLER : onClickCategoryDepth2
  const onClickCategoryDepth2 = useCallback((value) => {
    console.log('onClickCategoryDepth2 => ', value);
    setCategoryValueDepth2(value);
  }, []);

  // EVENT HANDLER : onChangeSelect
  const onChangeSelect = useCallback((value) => {
    console.log('onChangeSelect => ', value);
  }, []);

  // EVENT CALLBACK SET
  const handleEvent = useCallback((eventNm, data, event) => {
    switch (eventNm) {
      case 'click_CategoryNav': onClickCategory(data); break
      case 'change_Select': onChangeSelect(data); break
    }
  }, [onChangeSelect, onClickCategory]);

  return (
    <TopSellerContainerWrap id="top_seller">
      <div className="area-category">
        <Select 
          data={category} 
          selectedValue={categoryValue} 
          onEvent={handleEvent}
          className="select-st1"
        />

        {/* <CategoryNav 
          mode="main" 
          data={category} 
          selectedValue={categoryValue} 
          onEvent={handleEvent}
        />  */}     

        {/* {categoryDepth2 !== null && <TopSellerCategoryDepth2 data={categoryDepth2} selectedcategoryValue={categoryValueDepth2} onEvent={handleEvent} />} */}
      </div>
      
      <div className="area-sorting">
        <span>06/23 07:17 기준</span>
        <Select 
          data={sorting} 
          selectedValue={sortingValue} 
          onEvent={handleEvent}
          className="select-st1"
        />
      </div>

      <TopSellerList data={list} />
      
    </TopSellerContainerWrap>
  );
}

export default memo(TopSellerContainer);