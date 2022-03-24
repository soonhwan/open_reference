import React, { memo, useState, FC, useCallback, useEffect } from 'react';
import { TopSellerCategory, TopSellerCategoryDepth2, TopSellerSort, TopSellerList, Pagination } from 'components';
import { TopSellerContainerWrap } from './TopSellerContainerStyles';
import listData from '../../../mockData/response_1644294867507.json'
//import categoryList from '../../../mockData/response_1644294867494.json'


const categoryList = {
  'data': [
    { mediumName: 'ALL', value: 'opt-1' },
    { mediumName: 'WOMEN', value: 'opt-2', categoryList: [
      {categoryName: 'ALL', value: 'opt-2-1' },
      {categoryName: 'APPAREL', value: 'opt-2-2' },
      {categoryName: 'BAG', value: 'opt-2-3' },
      {categoryName: 'SHOES', value: 'opt-2-4' },
      {categoryName: 'ACC', value: 'opt-2-5' },
    ]},
    { mediumName: 'MEN', value: 'opt-3', categoryList: [
      {categoryName: 'ALL', value: 'opt-3-1' },
      {categoryName: 'APPAREL', value: 'opt-3-2' },
      {categoryName: 'BAG', value: 'opt-3-3' },
      {categoryName: 'SHOES', value: 'opt-3-4' },
      {categoryName: 'ACC', value: 'opt-3-5' },
    ]},
    { mediumName: 'LIFE', value: 'opt-4', categoryList: [
      {categoryName: 'ALL', value: 'opt-4-1' },
      {categoryName: 'LIFEWEAR', value: 'opt-4-2' },
      {categoryName: 'HOME', value: 'opt-4-3' },
      {categoryName: 'TRAVEL', value: 'opt-4-4' },
      {categoryName: 'DIGITAL', value: 'opt-4-5' },
      {categoryName: 'PET', value: 'opt-4-6' },
      {categoryName: 'GOODS', value: 'opt-4-7' },
    ]},
    { mediumName: 'BEAUTY&', value: 'opt-5', categoryList: [
      {categoryName: 'ALL', value: 'opt-5-1' },
      {categoryName: 'FACIAL BEAUTY', value: 'opt-5-2' },
      {categoryName: 'SALON BEAUTY', value: 'opt-5-3' },
      {categoryName: 'SCENT BEAUTY', value: 'opt-5-4' },
      {categoryName: 'INNER BEAUTY', value: 'opt-5-5' },
      {categoryName: 'for MEN', value: 'opt-5-6' },
    ]},
  ]
}

interface IProps {
  data?: any;
}

const TopSellerContainer: FC<IProps> = ({ data }) => {
  const [list, setList] = useState(listData.data);
  const [category, setCategory] = useState(categoryList.data);
  const [categoryDepth2, setCategoryDepth2] = useState(null);
  const [itemValue, setItemValue] = useState('opt-1');
  const [itemValueDepth2, setItemValueDepth2] = useState('');

  // EVENT HANDLER : onClickCategory
  const onClickCategory = useCallback((value) => {
    console.log('onClickCategory => ', value);
    setItemValue(value);
    if(value !== 'opt-1') {
      const listDepth2: any = category.find((item: any) => item.value === value);
      setCategoryDepth2(listDepth2.categoryList);
      setItemValueDepth2(listDepth2.categoryList[0].value);
    } else {
      setCategoryDepth2(null);
      setItemValueDepth2('');
    }
  }, [category]);

  // EVENT HANDLER : onClickCategoryDepth2
  const onClickCategoryDepth2 = useCallback((value) => {
    console.log('onClickCategoryDepth2 => ', value);
    setItemValueDepth2(value);
  }, []);

  // EVENT CALLBACK SET
  const handleEvent = useCallback((eventNm, data, event) => {
    switch (eventNm) {
      case 'click_TopSellerCategory': onClickCategory(data); break
      case 'click_TopSellerCategoryDepth2': onClickCategoryDepth2(data); break
    }
  }, [onClickCategory, onClickCategoryDepth2]);

  return (
    <TopSellerContainerWrap id="top_seller">
      <TopSellerCategory data={category} selectedItemValue={itemValue} onEvent={handleEvent} />
      {categoryDepth2 !== null && <TopSellerCategoryDepth2 data={categoryDepth2} selectedItemValue={itemValueDepth2} onEvent={handleEvent} />}
      <TopSellerSort />
      <TopSellerList data={list} />
      <Pagination />
    </TopSellerContainerWrap>
  );
}

export default memo(TopSellerContainer);