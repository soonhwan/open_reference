import React, { memo, FC, useEffect, useState, useCallback } from "react";
import { Header, Footer, Actionbar, CategoryBar, CommonLayout } from "components";
import { MainLayoutWrap } from "./MainLayoutStyles";

interface IProps {
  children?: any;
}

const categoryList = [
  { text: 'MAGIC CLOSET', value: "opt-1", link: null, dot: true },
  { text: 'SPRING#', value: "opt-2", link: null, dot: true },
  { text: 'BEST', value: "opt-3", link: null },
  { text: 'SALE', value: "opt-4", link: null },
  { text: 'APPAREL', value: "opt-5", link: null },
  { text: 'BAG', value: "opt-6", link: null },
  { text: 'SHOWINDOW', value: "opt-7", link: null },
];

const MainLayout: FC<IProps> = ({ children }) => {
  const headerMode = 'main'
  const actionbarMode = 'main'
  const genderType = 'women'

  //header gnb
  const [category, setCategory] = useState(categoryList);
  const [itemValue, setItemValue] = useState("opt-3");

  // EVENT HANDLER : onClickCategory
  const onClickCategory = useCallback((data) => {
    console.log('onClickCategory => ', data);
    setItemValue(data.value);
  }, []);

  // EVENT CALLBACK SET
  const handleEvent = useCallback((eventNm, data, event) => {
    switch (eventNm) {
      case 'click_CategoryBar': onClickCategory(data); break
    }
  }, [onClickCategory]);
  
  return (
    <MainLayoutWrap>
      <CommonLayout 
        headerMode={headerMode} 
        actionbarMode={actionbarMode} 
        genderType={genderType}
      >
        <CategoryBar 
          mode="header-nav"
          data={category} 
          selectedValue={itemValue} 
          onEvent={handleEvent}
        />
        <div id="container">{children}</div>
      </CommonLayout>
    </MainLayoutWrap>
  );
};

export default memo(MainLayout);


