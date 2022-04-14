import React, { memo, useState, FC, useCallback, useEffect, useMemo } from 'react';
import { Select, CategoryBar } from 'components';
import { CategorySortingBarWrap } from './CategorySortingBarStyles';
import utils from 'utils';

const CHANGE_CATEGORYSORTINGBAR_SORTING = "change_CategorySortingBar_sorting";
const CHANGE_CATEGORYSORTINGBAR_CATEGORY = "change_CategorySortingBar_category";

interface IProps {
  id: string;
  mode: string;
  sorting: {
    data?: any,
    value?: any,
  };
  category: {
    data?: any,
    value?: any,
  };
  categoryShow: boolean;
  className: string;
  onEvent: any;
}

const CategorySortingBar: FC<IProps> = ({ id, mode, sorting, category, className, onEvent }) => {
  const [_selectedSortingValue, setSelectedSortingValue] = useState(sorting.value);
  const [_selectedCategoryValue, setSelectedCategoryValue] = useState(category.value);

  useEffect(() => {
    setSelectedSortingValue(sorting.value);
    setSelectedCategoryValue(category.value);
  }, [category, sorting]);

  const _className = useMemo(() => {
    return utils.classNameBind([
      'category-sorting-bar', 
      mode ? mode : '',
      className ? className : '',
    ])
  }, [mode, className])

  // EVENT HANDLER : onChangeSelect
  const onChangeSelect = useCallback((data) => {
    //console.log('onChangeSelect => ', data);
    onEvent(CHANGE_CATEGORYSORTINGBAR_SORTING, data)
  }, [onEvent]);

  // EVENT HANDLER : onClickCategory
  const onClickCategory = useCallback((data) => {
    //console.log('onClickCategory => ', data);
    onEvent(CHANGE_CATEGORYSORTINGBAR_CATEGORY, data)
  }, [onEvent]);

  // EVENT CALLBACK SET
  const handleEvent = useCallback((eventNm, data, event) => {
    switch (eventNm) {
      case 'change_Select': onChangeSelect(data); break
      case 'click_CategoryBar': onClickCategory(data); break
    }
  }, [onChangeSelect, onClickCategory]);

  return (
    <CategorySortingBarWrap className={_className} mode={mode} id={id}>
      <div className="area-sorting">
        <Select 
          mode="sorting"
          data={sorting.data} 
          selectedValue={_selectedSortingValue} 
          onEvent={handleEvent}
        />
      </div>
      {category.data !== null && (
        <CategoryBar 
          mode="category-nav"
          data={category.data} 
          selectedValue={_selectedCategoryValue} 
          onEvent={handleEvent}
        />
      )}
    </CategorySortingBarWrap>
  );
}

export default memo(CategorySortingBar);