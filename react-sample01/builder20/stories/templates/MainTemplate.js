import React from 'react';
import { action } from '@storybook/addon-actions';
import { MainTemplate } from 'components'

export const MainTemplateEx = () => {
  return (
    <MainTemplate>
      <div>
        <h1>Contents</h1>
        MainTemplate 과 SubTemplate이 같아 보이지만 <br />
        Mobile 해상도에서 다른 모습으로 보입니다.
      </div>
    </MainTemplate>
  );
}
export default MainTemplateEx
