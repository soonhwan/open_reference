import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import StoryWrapperComponent from '../hocs/StoryWrapperComponent.js'
import { LinkRenderer } from 'components';

export const LinkEx = () => {
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">텍스트 링크 샘플<span>&lt;LinkRenderer mode="text"&gt;텍스트&lt;/LinkRenderer&gt;</span></div>
        <div className="sampleCo"><LinkRenderer mode="text">링크</LinkRenderer></div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">아이콘 링크 샘플<span>&lt;LinkRenderer mode="icon" icon="search" iconSize="24"&gt;검색&lt;/LinkRenderer&gt;</span></div>
        <div className="sampleCo">
          <LinkRenderer mode="icon" icon="search" iconsize="24">검색</LinkRenderer>
          <LinkRenderer mode="icon" icon="my" iconsize="24">마이페이지</LinkRenderer>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">아이콘 텍스트 링크 샘플<span>&lt;LinkRenderer mode="icontext" size="B12" color="Medium" icon="optionOff" iconsize="16"&gt;완결&lt;/LinkRenderer&gt;</span></div>
        <div className="sampleCo">
          <LinkRenderer mode="icontext" size="B12" color="Medium" icon="optionOff" iconsize="16">완결</LinkRenderer>
          <LinkRenderer mode="icontext" size="B12" color="Medium" icon="optionOff" iconsize="16">전체 선택</LinkRenderer>
          <LinkRenderer mode="icontext" size="B12" color="Medium" icon="optionOff" iconsize="16">기간만료 선택</LinkRenderer>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">텍스트 아이콘 링크 샘플<span>&lt;LinkRenderer mode="texticon" size="B14" color="Dark" icon="dropup" iconsize="20"&gt;전체&lt;/LinkRenderer&gt;</span></div>
        <div className="sampleCo">
          <LinkRenderer mode="texticon" size="B14" color="Dark" icon="dropup" iconsize="20">전체</LinkRenderer>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">아이콘 텍스트 텍스트 샘플<span>&lt;LinkRenderer mode="icontextno" size="B12" color="Medium" icon="avgscore" iconsize="12"&gt;4&lt;/LinkRenderer&gt;</span></div>
        <div className="sampleCo">
          <LinkRenderer mode="icontextno" size="B12" color="Medium" icon="avgscore" iconsize="12">4</LinkRenderer>
          <LinkRenderer mode="icontextno" size="B12" color="Medium" icon="comment" iconsize="12">9,999</LinkRenderer>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">색상 링크 샘플<span>&lt;mode="text" btnClass="btnSmall" size="B12" color="White"&gt;4&lt;/LinkRenderer&gt;</span></div>
        <div className="sampleCo">
          <LinkRenderer mode="text" btnClass="btnSmall" size="B12" color="White">텍스트</LinkRenderer>
          <LinkRenderer mode="icontext" btnClass="btnSmall" size="B12" color="White" icon="likeWhite" iconsize="16">텍스트</LinkRenderer>
          <LinkRenderer mode="icon" btnClass="btnSmall" icon="likeWhite" iconsize="16">텍스트</LinkRenderer>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">색상 링크 샘플<span>&lt;mode="text" btnClass="btnMedium" size="B14" color="White"&gt;4&lt;/LinkRenderer&gt;</span></div>
        <div className="sampleCo">
          <LinkRenderer mode="text" btnClass="btnMedium" size="B14" color="White">텍스트</LinkRenderer>
          <LinkRenderer mode="icontext" btnClass="btnMedium" size="B14" color="White" icon="likeWhite" iconsize="20">텍스트</LinkRenderer>
          <LinkRenderer mode="icon" btnClass="btnMedium" icon="likeWhite" iconsize="20">텍스트</LinkRenderer>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">색상 링크 샘플<span>&lt;mode="text" btnClass="btnLarge" size="ST16" color="White"&gt;4&lt;/LinkRenderer&gt;</span></div>
        <div className="sampleCo">
          <LinkRenderer mode="text" btnClass="btnLarge" size="ST16" color="White">텍스트</LinkRenderer>
          <LinkRenderer mode="icontext" btnClass="btnLarge" size="ST16" color="White" icon="likeWhite" iconsize="22">텍스트</LinkRenderer>
          <LinkRenderer mode="icon" btnClass="btnLarge" icon="likeWhite" iconsize="22">텍스트</LinkRenderer>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">색상 링크 샘플<span>&lt;mode="text" btnClass="btnSmall btnWhite" size="B12B" color="Drak"&gt;4&lt;/LinkRenderer&gt;</span></div>
        <div className="sampleCo">
          <LinkRenderer mode="text" btnClass="btnSmall btnWhite" size="B12B" color="Drak">텍스트</LinkRenderer>
          <LinkRenderer mode="icontext" btnClass="btnSmall btnWhite" size="B12B" color="Drak" icon="comment" iconsize="16">텍스트</LinkRenderer>
          <LinkRenderer mode="icon" btnClass="btnSmall btnWhite" icon="comment" iconsize="16">텍스트</LinkRenderer>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">색상 링크 샘플<span>&lt;mode="text" btnClass="btnSmall btnExtraL50" size="B12B" color="Drak"&gt;4&lt;/LinkRenderer&gt;</span></div>
        <div className="sampleCo">
          <LinkRenderer mode="text" btnClass="btnSmall btnExtraL50" size="B12B" color="Drak">텍스트</LinkRenderer>
          <LinkRenderer mode="icontext" btnClass="btnSmall btnExtraL50" size="B12B" color="Drak" icon="comment" iconsize="16">텍스트</LinkRenderer>
          <LinkRenderer mode="icon" btnClass="btnSmall btnExtraL50" icon="comment" iconsize="16">텍스트</LinkRenderer>
        </div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">색상 링크 샘플<span>&lt;mode="text" btnClass="btnSmall btnExtraL50 btnBlock" size="B12B" color="Drak"&gt;4&lt;/LinkRenderer&gt;</span></div>
        <div className="sampleCo">
          <LinkRenderer mode="text" btnClass="btnSmall btnExtraL50 btnBlock" size="B12B" color="Drak">텍스트</LinkRenderer>
          <LinkRenderer mode="icontext" btnClass="btnSmall btnExtraL50 btnBlock" size="B12B" color="Drak" icon="comment" iconsize="16">텍스트</LinkRenderer>
          <LinkRenderer mode="icon" btnClass="btnSmall btnExtraL50 btnBlock" icon="comment" iconsize="16">텍스트</LinkRenderer>
        </div>
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <style>{`
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
          .sampleCase .sampleTitle span { padding:5px 0 0 0; font-size:12px; display:block; }
          .sampleCase .sampleCo {
            padding: 5px;
            background: #ffffff;
          }
          .sampleCase .sampleCo .btnSmall { margin-right:5px; }
          .sampleCase .sampleCo .btnMedium { margin-right:5px; }
          .sampleCase .sampleCo .btnLarge { margin-right:5px; }
          .sampleCase .sampleCo .btnBlock { margin-right:0; margin-bottom:5px;}
      `}</style>
    </div>
  );
}


storiesOf('Components|Common/Link', module)
  .addDecorator(StoryWrapperComponent)
  .add('default', () => (
    <LinkEx />
  ))
