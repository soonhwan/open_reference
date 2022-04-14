import React, { memo, useState, FC, useCallback, useEffect } from 'react';
import { CategoryBar, TopSellerCategory, TopSellerCategoryDepth2, Select, ProductList } from 'components';
import { TopSellerContainerWrap } from './TopSellerContainerStyles';
import listData from '../../../mockData/response_1644294867507.json'
//import categoryList from '../../../mockData/response_1644294867494.json'


const categoryList = {
  'data': [
    { text: 'ALL', value: 'opt-1' },
    { text: 'WOMEN', value: 'opt-2', categoryList: [
      {text: 'ALL', value: 'opt-2-1', img: '/images/dummy/dummy01.png' },
      {text: 'APPAREL', value: 'opt-2-2', img: '/images/dummy/dummy02.png' },
      {text: 'BAG', value: 'opt-2-3', img: '/images/dummy/dummy03.png' },
      {text: 'SHOES', value: 'opt-2-4', img: '/images/dummy/dummy04.png' },
      {text: 'ACC', value: 'opt-2-5', img: '/images/dummy/dummy05.png' },
    ]},
    { text: 'MEN', value: 'opt-3', categoryList: [
      {text: 'ALL', value: 'opt-3-1', img: '/images/dummy/dummy01.png' },
      {text: 'APPAREL', value: 'opt-3-2', img: '/images/dummy/dummy02.png' },
      {text: 'BAG', value: 'opt-3-3', img: '/images/dummy/dummy03.png' },
      {text: 'SHOES', value: 'opt-3-4', img: '/images/dummy/dummy04.png' },
      {text: 'ACC', value: 'opt-3-5', img: '/images/dummy/dummy05.png' },
    ]},
    { text: 'LIFE', value: 'opt-4', categoryList: [
      {text: 'ALL', value: 'opt-4-1', img: '/images/dummy/dummy01.png' },
      {text: 'LIFEWEAR', value: 'opt-4-2', img: '/images/dummy/dummy02.png' },
      {text: 'HOME', value: 'opt-4-3', img: '/images/dummy/dummy03.png' },
      {text: 'TRAVEL', value: 'opt-4-4', img: '/images/dummy/dummy04.png' },
      {text: 'DIGITAL', value: 'opt-4-5', img: '/images/dummy/dummy05.png' },
      {text: 'PET', value: 'opt-4-6', img: '/images/dummy/dummy01.png' },
      {text: 'GOODS', value: 'opt-4-7', img: '/images/dummy/dummy02.png' },
    ]},
    { text: 'BEAUTY&', value: 'opt-5', categoryList: [
      {text: 'ALL', value: 'opt-5-1', img: '/images/dummy/dummy01.png' },
      {text: 'FACIAL BEAUTY', value: 'opt-5-2', img: '/images/dummy/dummy02.png' },
      {text: 'SALON BEAUTY', value: 'opt-5-3', img: '/images/dummy/dummy03.png' },
      {text: 'SCENT BEAUTY', value: 'opt-5-4', img: '/images/dummy/dummy04.png' },
      {text: 'INNER BEAUTY', value: 'opt-5-5', img: '/images/dummy/dummy05.png' },
      {text: 'for MEN', value: 'opt-5-6', img: '/images/dummy/dummy01.png' },
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
  const [categoryValue, setCategoryValue] = useState('opt-2');
  
  //category Depth2
  const [categoryDepth2, setCategoryDepth2] = useState(null);
  const [categoryValueDepth2, setCategoryValueDepth2] = useState('');

  //sorting
  const [sorting, setSorting] = useState(sortingList);
  const [sortingValue, setSortingValue] = useState('opt-1');

  //초기 셋팅
  useEffect(()=>{
    if(categoryValue !== 'opt-1') {
      const listDepth2: any = category.find((item: any) => item.value === categoryValue);
      setCategoryDepth2(listDepth2.categoryList);
      setCategoryValueDepth2(listDepth2.categoryList[0].value);
    }
  },[category, categoryValue])

  // EVENT HANDLER : onClickCategory
  const onClickCategory = useCallback((data) => {
    console.log('onClickCategory => ', data);
    const { id, value } = data

    if(id === 'categoryDepth2'){
      setCategoryValueDepth2(value)
    }
  }, []);

  // EVENT HANDLER : onChangeSelect
  const onChangeSelect = useCallback((data) => {
    console.log('onChangeSelect => ', data);
    const { id, value } = data

    if(id === 'category'){
      setCategoryValue(value);
      
      if(value !== 'opt-1') {
        const listDepth2: any = category.find((item: any) => item.value === value);
        setCategoryDepth2(listDepth2.categoryList);
        setCategoryValueDepth2(listDepth2.categoryList[0].value);
      } else {
        setCategoryDepth2(null);
        setCategoryValueDepth2('');
      }
    }

  }, [category]);

  // EVENT CALLBACK SET
  const handleEvent = useCallback((eventNm, data, event) => {
    switch (eventNm) {
      case 'click_CategoryBar': onClickCategory(data); break
      case 'change_Select': onChangeSelect(data); break
    }
  }, [onChangeSelect, onClickCategory]);

  return (
    <TopSellerContainerWrap>
      <div className="area-category">
        <div className="ac-sorting">
          <Select 
            id="category"
            mode="sorting"
            data={category} 
            selectedValue={categoryValue} 
            onEvent={handleEvent}
          />
        </div>
        {categoryDepth2 !== null && (
          <CategoryBar 
            id="categoryDepth2"
            mode="category-nav"
            data={categoryDepth2} 
            selectedValue={categoryValueDepth2} 
            onEvent={handleEvent}
          />
        )}
      </div>
      
      <div className="area-sorting">
        <span className="time"><em>06/23 07:17</em> 기준</span>
        <Select 
          id="period"
          mode="sorting"
          data={sorting} 
          selectedValue={sortingValue} 
          onEvent={handleEvent}
        />
      </div>

      <ProductList data={list} />
      
    </TopSellerContainerWrap>
  );
}

export default memo(TopSellerContainer);