import React from 'react';
import { Type1Template } from 'components'
import utils from 'utils';

const Type1Page = () => {

  const convertStyle = () => {
    return {
      color: 'transparent', 
      position: 'relative', 
      width: '32px', 
      height: '46px', 
      fontSize: 0,
      lineHeight: 0,
      // background: 'url(/resources/nbook20/images/nbooks/icon/icon_gift_type.png) no-repeat 0px 0px', 
      // background: 'url(/resources/nbook10/images/nbooks/icon/icon_gift_type.png) no-repeat 0px 0px', 
      background: 'url(/static/images/icon/bg_icon_01.png) no-repeat left top', 
      backgroundPosition: '-40px -90px',
      backgroundSize: '500px 800px',
      display: 'block',
    }
  }

  const getInputs = (type, group) => {
    const _id = utils.getAutoGenId()

    const input = type === 'radio' ? <input type={type} name={group} id={_id} /> : <input type={type} id={_id} />

    return (
      <span>
        {input}
        <label htmlFor={_id}>눌러보세요</label>
      </span>
    )
  }

  return (
    <Type1Template>
      <div className="Type1Page">
        <h1>Type1Page</h1>

        {/* 예제1. 지정된 경로의 이미지 경로 처리  */}
        <div>
          <div>예제1. 지정된 경로의 이미지 경로 처리</div>
          <i style={convertStyle()}>test-icon</i>
        </div>

        {/* 예제2. input id generator */}
        <div>
          <div>예제2. input id generator</div>
          <div>
            {getInputs('checkbox')}
          </div>
          <div>
            {getInputs('radio', 'g1')}
            {getInputs('radio', 'g1')}
          </div>
          <div>
            {getInputs('radio', 'g2')}
            {getInputs('radio', 'g2')}
          </div>
        </div>
      </div>
    </Type1Template>
  );
};

export default Type1Page;
