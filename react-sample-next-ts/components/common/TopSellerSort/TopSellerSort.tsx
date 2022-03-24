import React, { memo, useState, FC, useCallback } from 'react';
import { TopSellerSortWrap } from './TopSellerSortStyles';

interface IProps {
  data?: any;
}

const TopSellerSort: FC<IProps> = ({ data }) => {

  return (
    <TopSellerSortWrap className="top_seller-sort">
      <span className="select">
        <select>
          <option value="일간" selected>일간</option>
          <option value="주간">주간</option>
          <option value="월간">월간</option>
        </select>
        <span className="select_box">일간</span>
      </span>
    </TopSellerSortWrap>
  );
}

export default memo(TopSellerSort);