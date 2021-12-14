import React from 'react';
import { action } from '@storybook/addon-actions';
import { SubTemplate } from 'components'

export const SubTemplateEx = () => {
  return (
    <SubTemplate>
      <div>
        <h1>Contents</h1>
        MainTemplate 과 SubTemplate이 같아 보이지만 <br />
        Mobile 해상도에서 다른 모습으로 보입니다.
      </div>
    </SubTemplate>
  );
}
export default SubTemplateEx
