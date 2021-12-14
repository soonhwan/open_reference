import React from 'react';
import { action } from '@storybook/addon-actions';
import { SnbTemplate } from 'components'

export const SnbTemplateEx = () => {
  return (
    <SnbTemplate>
      <div>
        <h1>Contents</h1>
        SnbTemplate 입니다.<br />
        Mobile 해상도와 테블릿 해상도에서는 Snb 영역이 보이지 않습니다.
      </div>
    </SnbTemplate>
  );
}
export default SnbTemplateEx
