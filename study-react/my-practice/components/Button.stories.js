import React from 'react';
import Button from './Button';

//props 에 따라 어떤 결과물을 보여주는지 바로바로 확인하고 싶을 때, 이렇게 Knobs 를 사용하면 매우 유용합니다!
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

//컴포넌트를 통하여 특정 함수가 호출됐을 때 어떤 함수가 호출됐는지, 그리고 함수에 어떤 파라미터를 넣어서 호출했는지에 대한 정보를 확인 할 수 있게 해줍니다
import { action } from '@storybook/addon-actions';

//Docs 페이지를 커스터마이징
//import mdx from './Hello.mdx';

export default {
  title: 'components/Button', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Button, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
}

export const button = () => {
  // knobs 만들기
  const label = text('label', 'Default');
  const type = text('type', 'button');
  const className = text('className', 'btn-st1');
  const id = text('id', 'name_ID');
  const disabled = boolean('disabled', false);
  return <Button onClick={action('onClick')} type={type} className={className} disabled={disabled} id={id}>{label}</Button>;
};
button.story = {
  name: 'Default Button'
};

export const linkbutton = () => {
  const label = text('label', 'Link');
  const href = text('href', '#section02');
  const target = text('target', '_blank');
  const className = text('className', 'btn-st1');
  return <Button onClick={action('onClick')} className={className} href={href} target={target}>{label}</Button>;
}

linkbutton.story = {
  name: 'Default Link Button'
};

