import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import StoryWrapperComponent from '../hocs/StoryWrapperComponent.js'
import { TextRenderer } from 'components';

export const TextEx = () => {
  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">기본 텍스트<span>&lt;TextRenderer&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer>세상의 모든 스토리, unknown</TextRenderer></div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">Headline Ty1<span>&lt;TextRenderer size="H32"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer size="H32">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Headline Ty2<span>&lt;TextRenderer size="H24"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer size="H24">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">Subtitle Ty1<span>&lt;TextRenderer size="ST20"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer size="ST20">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Subtitle Ty1 Bold<span>&lt;TextRenderer size="ST20B"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer size="ST20B">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Subtitle Ty2<span>&lt;TextRenderer size="ST18"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer size="ST18">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Subtitle Ty2 Bold<span>&lt;TextRenderer size="ST18B"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer size="ST18B">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Subtitle Ty3<span>&lt;TextRenderer size="ST16"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer size="ST16">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Subtitle Ty3 Bold<span>&lt;TextRenderer size="ST16B"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer size="ST16B">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">Body Ty1<span>&lt;TextRenderer size="B14"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer size="B14">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Body Ty1 Bold<span>&lt;TextRenderer size="B14B"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer size="B14B">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Body Ty2<span>&lt;TextRenderer size="B12"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer size="B12">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Body Ty2 Bold<span>&lt;TextRenderer size="B12B"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer size="B12B">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">Caption<span>&lt;TextRenderer size="C10"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer size="C10">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">Caption Bold<span>&lt;TextRenderer size="C10B"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer size="C10B">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">색상 (Dark)<span>&lt;TextRenderer color="Dark"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer color="Dark">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">색상 (Dark / 투명도 90%)<span>&lt;TextRenderer color="Dark90"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer color="Dark90">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">색상 (Dark / 투명도 70%)<span>&lt;TextRenderer color="Dark70"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer color="Dark70">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">색상 (Dark / 투명도 50%)<span>&lt;TextRenderer color="Dark50"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer color="Dark50">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">색상 (Dark / 투명도 30%)<span>&lt;TextRenderer color="Dark30"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer color="Dark30">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">색상 (Dark / 투명도 10%)<span>&lt;TextRenderer color="Dark10"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer color="Dark10">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">색상 (Medium)<span>&lt;TextRenderer color="Medium"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer color="Medium">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">색상 (Light)<span>&lt;TextRenderer color="Light"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer color="Light">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">색상 (ExtraLight)<span>&lt;TextRenderer color="ExtraL"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer color="ExtraL">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">색상 (White)<span>&lt;TextRenderer color="White"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer color="White">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">색상 (Point)<span>&lt;TextRenderer color="Point"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer color="Point">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">색상 (Secondary)<span>&lt;TextRenderer color="Secondary"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer color="Secondary">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">색상 (Error)<span>&lt;TextRenderer color="Error"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer color="Error">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">색상 (Success)<span>&lt;TextRenderer color="Success"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer color="Success">세상의 모든 스토리, unknown</TextRenderer></div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">한줄 말줄임 ... 처리<span>&lt;TextRenderer textClass="Ellipsis"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer textClass="Ellipsis">세상의 모든 스토리, unknown 세상의 모든 스토리, unknown 세상의 모든 스토리, unknown</TextRenderer></div>
      </div>

      <div className="sampleCase">
        <div className="sampleTitle">다중 말줄임 ... 처리 (4라인까지 처리 LineEll1, LineEll2, LineEll3, LineEll4)<span>&lt;TextRenderer textClass="LineEll2"&gt;세상의 .... 북스&lt;/TextRenderer&gt;</span></div>
        <div className="sampleCo"><TextRenderer textClass="LineEll2">세상의 모든 스토리, unknown 세상의 모든 스토리, unknown 세상의 모든 스토리, unknown 세상의 모든 스토리, unknown 세상의 모든 스토리, unknown 세상의 모든 스토리, unknown 세상의 모든 스토리, unknown 세상의 모든 스토리, unknown 세상의 모든 스토리, unknown 세상의 모든 스토리, unknown 세상의 모든 스토리, unknown 세상의 모든 스토리, unknown</TextRenderer></div>
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
      `}</style>
    </div>
  );
}


storiesOf('Components|Common/Text', module)
  .addDecorator(StoryWrapperComponent)
  .add('default', () => (
    <TextEx />
  ))
