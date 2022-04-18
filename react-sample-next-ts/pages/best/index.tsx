/*
  페이지 이름 : BEST 
  페이지 주소 : /best
*/
import type { NextPage } from "next";
import React, { useState, useCallback, useEffect } from 'react';
import { MainLayout, LoaderSpinner, SortingBar, CategorySortingBar, ProductList } from 'components';
import { useInfiniteScroll } from "hooks";
import listData from '../../mockData/response_1644294867507.json'

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

const timeTxt = `<em>06/23 07:17</em> 기준`;

const BestPage: NextPage = () => {  
  //category sorting
  const [categorySorting, setCategorySorting] = useState(categoryList.data);
  const [categorySortingValue, setCategorySortingValue] = useState('opt-2');
  
  //category Depth2
  const [categoryDepth2, setCategoryDepth2] = useState(null);
  const [categoryValueDepth2, setCategoryValueDepth2] = useState('');

  //상품 list sorting
  const [sortingData, setSortingData] = useState(sortingList);
  const [sortingValue, setSortingValue] = useState('opt-1');

  //상품 list
  const [productList, setProductList] = useState(listData.data);

  //Loader
  const [isLoader, setIsLoader] = useState(false);

  //category 초기 셋팅
  useEffect(()=>{
    if(categorySortingValue !== 'opt-1') {
      const listDepth2: any = categorySorting.find((item: any) => item.value === categorySortingValue);
      setCategoryDepth2(listDepth2.categoryList);
      setCategoryValueDepth2(listDepth2.categoryList[0].value);
    }
  },[categorySorting, categorySortingValue])

  //list add fetching
  const isFetching = useInfiniteScroll(fetchMoreListItems)
  function fetchMoreListItems() {
    const moreList = productList.concat(listData.data)
    if(moreList.length < 101 && !isLoader){
      setIsLoader(true)
      setTimeout(()=>{
        setProductList(moreList)
      }, 1000)
    }
  }

  //list add fetch complete
  useEffect(()=>{
    if(isFetching && isLoader){
      setTimeout(()=>{
        setIsLoader(false)
      }, 1000)
    }    
  },[isFetching, isLoader])

  // EVENT HANDLER : onChangeCategorySortingBarCategory
  const onChangeCategorySortingBarCategory = useCallback((data) => {
    console.log('onChangeCategorySortingBarCategory => ', data);
    const { id, value } = data
    setCategoryValueDepth2(value)
  }, []);

  // EVENT HANDLER : onChangeCategorySortingBarSorting
  const onChangeCategorySortingBarSorting = useCallback((data) => {
    console.log('onChangeCategorySortingBarSorting => ', data);
    const { id, value } = data
    setCategorySortingValue(value);
    
    if(value !== 'opt-1') {
      const listDepth2: any = categorySorting.find((item: any) => item.value === value);
      setCategoryDepth2(listDepth2.categoryList);
      setCategoryValueDepth2(listDepth2.categoryList[0].value);
    } else {
      setCategoryDepth2(null);
      setCategoryValueDepth2('');
    }
  }, [categorySorting]);

  // EVENT HANDLER : onChangeSortingBar
  const onChangeSortingBar = useCallback((data) => {
    console.log('onChangeSortingBar => ', data);
    //const { id, value } = data
    setSortingValue(data.value)
  }, []);

  // EVENT CALLBACK SET
  const handleEvent = useCallback((eventNm, data, event) => {
    switch (eventNm) {
      case 'change_CategorySortingBar_sorting': onChangeCategorySortingBarSorting(data); break
      case 'change_CategorySortingBar_category': onChangeCategorySortingBarCategory(data); break
      case 'change_SortingBar': onChangeSortingBar(data); break
    }
  }, [onChangeCategorySortingBarCategory, onChangeCategorySortingBarSorting, onChangeSortingBar]);

  // ITEM RENDERER : getListRender
  const getListRender = useCallback(() => {
    if (productList?.length > 0) {
      return (
        <>
          <ProductList mode="product" data={productList} />
          {isLoader && <LoaderSpinner />}
        </>
      )
    } else {
      return <div>리스트가 없습니다.</div>
    }
  }, [isLoader, productList]);

  return (
    <MainLayout className="best-page">
      <CategorySortingBar 
        sorting={{ data: categorySorting, value: categorySortingValue }}
        category={{ data: categoryDepth2, value: categoryValueDepth2 }}
        onEvent={handleEvent}
      />
      
      <SortingBar 
        data={sortingData} 
        selectedValue={sortingValue} 
        txt={timeTxt} 
        onEvent={handleEvent} 
      />

      {getListRender()}    
    </MainLayout>
  );
};

export default BestPage;
