import React from 'react';
import { AppLayout } from 'components';
import { SubTitle } from 'styles/common';

const About = () => {
  return (
    <AppLayout>
      <SubTitle size={24}>회사소개</SubTitle>
      <div>
        회사소개 내용 입니다...
      </div>
    </AppLayout>
  )
}

export default About;