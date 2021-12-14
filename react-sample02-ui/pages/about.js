import React from 'react';
import { AppLayout } from 'components';
import { SubTitle } from 'styles/common';

import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const ButtonWrapper = styled(Button)`
  background: red;
  :hover {
    background: green;
  }
`;

const About = () => {
  return (
    <AppLayout>
      <SubTitle size={24}>회사소개</SubTitle>

      <ButtonWrapper>버튼</ButtonWrapper>
      <br />

      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </AppLayout>
  )
}

export default About;