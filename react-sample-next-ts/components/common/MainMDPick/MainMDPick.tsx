import React, { memo, useState, FC, useCallback } from "react";
import { MainMDPickWrap } from "./MainMDPickStyles";
import {
  CategoryTab,
  MDPickList,
} from "../../index";

const categoryList = {
  data: [
    { categoryName: "ALL", value: "opt-1", itemList: [
        { href: null, img: '/images/thumb/thumbnail21.jpg', funding: true, preOrder: false, title: 'ALL faff', price: '74,000', dc: '5%', },
        { href: null, img: '/images/thumb/thumbnail22.jpg', funding: false, preOrder: true, title: 'BETTERS&', price: '33,915', dc: '20%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail22.jpg', funding: false, preOrder: true, title: 'BETTERS&', price: '33,915', dc: '20%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail20.jpg', funding: true, preOrder: false, title: 'faff', price: '74,000', dc: '5%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail22.jpg', funding: false, preOrder: true, title: 'BETTERS&', price: '33,915', dc: '20%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
      ] 
    },
    { categoryName: "APPAREL", value: "opt-2", itemList: [
        { href: null, img: '/images/thumb/thumbnail22.jpg', funding: false, preOrder: true, title: 'APPAREL BETTERS&', price: '33,915', dc: '20%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail20.jpg', funding: true, preOrder: false, title: 'faff', price: '74,000', dc: '5%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
      ] 
    },
    { categoryName: "BAG", value: "opt-3", itemList: [
        { href: null, img: '/images/thumb/thumbnail22.jpg', funding: false, preOrder: true, title: 'BAG BETTERS&', price: '33,915', dc: '20%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail20.jpg', funding: true, preOrder: false, title: 'faff', price: '74,000', dc: '5%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
      ] 
    },
    { categoryName: "SHOES", value: "opt-4", itemList: [
        { href: null, img: '/images/thumb/thumbnail22.jpg', funding: false, preOrder: true, title: 'SHOES BETTERS&', price: '33,915', dc: '20%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail20.jpg', funding: true, preOrder: false, title: 'faff', price: '74,000', dc: '5%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
      ] 
    },
    { categoryName: "ACC", value: "opt-5", itemList: [
        { href: null, img: '/images/thumb/thumbnail22.jpg', funding: false, preOrder: true, title: 'ACC BETTERS&', price: '33,915', dc: '20%', },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail20.jpg', funding: true, preOrder: false, title: 'faff', price: '74,000', dc: '5%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
      ] 
    },
    { categoryName: "BEAUTY", value: "opt-6", itemList: [
        { href: null, img: '/images/thumb/thumbnail22.jpg', funding: false, preOrder: true, title: 'BEAUTY BETTERS&', price: '33,915', dc: '20%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail20.jpg', funding: true, preOrder: false, title: 'faff', price: '74,000', dc: '5%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
      ] 
    },
    { categoryName: "LIFEWEAR", value: "opt-7", itemList: [
        { href: null, img: '/images/thumb/thumbnail22.jpg', funding: false, preOrder: true, title: 'LIFEWEAR BETTERS&', price: '33,915', dc: '20%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail20.jpg', funding: true, preOrder: false, title: 'faff', price: '74,000', dc: '5%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
      ] 
    },
    { categoryName: "LIFE", value: "opt-8", itemList: [
        { href: null, img: '/images/thumb/thumbnail22.jpg', funding: false, preOrder: true, title: 'LIFE BETTERS&', price: '33,915', dc: '20%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail20.jpg', funding: true, preOrder: false, title: 'faff', price: '74,000', dc: '5%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail23.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail24.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
        { href: null, img: '/images/thumb/thumbnail18.jpg', funding: false, preOrder: false, title: 'inusway', price: '75,050', dc: '15%', },
        { href: null, img: '/images/thumb/thumbnail17.jpg', funding: false, preOrder: false, title: 'MUTEMUSE', price: '248,000', dc: null, },
      ] 
    },
  ],
};

interface IProps {
  data?: any;
}

const MainMDPick: FC<IProps> = ({ data }) => {
  const [category, setCategory] = useState(categoryList.data);
  const [itemValue, setItemValue] = useState("opt-1");

  // EVENT HANDLER : onClickCategory
  const onClickCategory = useCallback((value) => {
    console.log('onClickCategory => ', value);
    setItemValue(value);
  }, []);

  // EVENT CALLBACK SET
  const handleEvent = useCallback((eventNm, data, event) => {
    switch (eventNm) {
      case 'click_CategoryTab': onClickCategory(data); break
    }
  }, [onClickCategory]);

  return (
    <MainMDPickWrap className="section md_pick_section">
      <h3 className="section_tit">MD’S PICK</h3>
      <div className="section_content">        
        <CategoryTab 
          data={category}
          selectedItemValue={itemValue}
          onEvent={handleEvent}
        />
        <MDPickList data={category} onEvent={handleEvent} />
      </div>
    </MainMDPickWrap>
  );
};

export default memo(MainMDPick);
