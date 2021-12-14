import React from 'react';
import { action } from '@storybook/addon-actions';
import { MemberTemplate } from 'components'

export const MemberTemplateEx = () => {
  return (
    <MemberTemplate>
      <div>
        <h1>Contents</h1>
        MemberTemplate 입니다.<br />
        Mobile 해상도와 테블릿 해상도에서는 Snb 영역이 보이지 않습니다.
      </div>
    </MemberTemplate>
  );
}
export default MemberTemplateEx
