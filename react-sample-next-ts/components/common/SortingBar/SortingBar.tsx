import React, { memo, useState, FC, useCallback, useEffect, useMemo } from 'react';
import { Select } from 'components';
import { SortingBarWrap } from './SortingBarStyles';
import utils from 'utils';

const CHANGE_SORTINGBAR = "change_SortingBar";

interface IProps {
  id: string;
  mode: string;
  txt: string;
  data?: any;
  selectedValue: string;
  className: string;
  onEvent: any;
}

const SortingBar: FC<IProps> = ({ id, mode, txt, data, className, selectedValue, onEvent }) => {
  const [_selectedValue, setSelectedValue] = useState(selectedValue);

  useEffect(() => {
    setSelectedValue(selectedValue);
  }, [selectedValue]);

  const _className = useMemo(() => {
    return utils.classNameBind([
      'sorting-bar', 
      mode ? mode : '',
      className ? className : '',
    ])
  }, [mode, className])

  // EVENT HANDLER : onChangeSelect
  const onChangeSelect = useCallback((data) => {
    //console.log('onChangeSelect => ', data);
    onEvent(CHANGE_SORTINGBAR, data)
  }, [onEvent]);

  // EVENT CALLBACK SET
  const handleEvent = useCallback((eventNm, data, event) => {
    switch (eventNm) {
      case 'change_Select': onChangeSelect(data); break
    }
  }, [onChangeSelect]);

  return (
    <SortingBarWrap className={_className} mode={mode} id={id}>
      <span className="txt" dangerouslySetInnerHTML={{ __html: txt }}></span>
      <Select 
        mode="sorting"
        data={data} 
        selectedValue={_selectedValue} 
        onEvent={handleEvent}
      />
    </SortingBarWrap>
  );
}

export default memo(SortingBar);