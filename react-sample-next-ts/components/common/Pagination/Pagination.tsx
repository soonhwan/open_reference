import React, { memo, useState, FC, useCallback } from 'react';
import { PaginationWrap } from './PaginationStyles';

interface IProps {
  className?: any;
}

const Pagination: FC<IProps> = ({ className }) => {

  return (
    <PaginationWrap className="pagination">
      <a href="#" className="active">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
    </PaginationWrap>
  );
}

export default memo(Pagination);