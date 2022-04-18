import React, { memo, FC } from 'react';
import { LoaderSpinnerWrap } from './LoaderSpinnerStyles';

const LoaderSpinner: FC = () => {
  return (
    <LoaderSpinnerWrap>
       <div className="ispinner">
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
        <div className="ispinner-blade"></div>
      </div>
    </LoaderSpinnerWrap>
  );
}

export default memo(LoaderSpinner);