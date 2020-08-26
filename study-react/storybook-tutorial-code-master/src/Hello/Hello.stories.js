import React from 'react';
import Hello from './Hello';

//props 에 따라 어떤 결과물을 보여주는지 바로바로 확인하고 싶을 때, 이렇게 Knobs 를 사용하면 매우 유용합니다!
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

//컴포넌트를 통하여 특정 함수가 호출됐을 때 어떤 함수가 호출됐는지, 그리고 함수에 어떤 파라미터를 넣어서 호출했는지에 대한 정보를 확인 할 수 있게 해줍니다
import { action } from '@storybook/addon-actions';

//Docs 페이지를 커스터마이징
//import mdx from './Hello.mdx';

export default {
  title: 'pages|Hello', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
  parameters: {
    componentSubtitle: '"안녕하세요" 라고 보여주는 컴포넌트', //컴포넌트에 부제목
    docs: {
      //page: mdx, 
    },
  },
}

export const hello = () => {
  // knobs 만들기
  const big = boolean('big', false);
  const name = text('name', 'Storybook');
  return (
    <Hello
      name={name}
      big={big}
      onHello={action('onHello')}
      onBye={action('onBye')}
    />
  );
};
hello.story = {
  name: 'Default'
};

export const standard = () => <Hello name="Storybook" />
export const big = () => <Hello name="Storybook" big />
//const big = boolean('big', false, 'Group 1');