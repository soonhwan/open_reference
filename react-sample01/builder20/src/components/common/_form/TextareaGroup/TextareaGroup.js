import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import { Textarea, TextRenderer, LinkRenderer } from 'components';
import styles from './TextareaGroup.scss';
import utils from 'utils';
import { useState } from 'hooks';

const TextareaGroup = ({ mode, inputParam, children, maxLength }) => {
  const [inputValue, setInputValue] = useState(inputParam.value);
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValLength, setInputValLength] = useState(false);

  const getInput = () => {
    const inputCustomParam = { ...inputParam };
    inputCustomParam.infoType = null;
    inputCustomParam.infoMessage = null;
    const inputEventParam = {
      onFocus: () => {
        setInputFocus(true);
      },
      onBlur: () => {
        setInputFocus(false);
      },
      onChange: (val) => {
        if (val.length > 0) {
          setInputValLength(true);
        } else {
          setInputValLength(false);
        }
        setInputValue(val);
      }
    }

    return (
      <div className="formTextareaGroupBox">
        <Textarea {...inputCustomParam} {...inputEventParam}>{children}</Textarea>
      </div>
    );
  }

  const getInputLength = () => {
    const param = {
      size: 'B12',
      color: 'Light'
    }
    return (
      <div className="formTextareaGroupLength">
        <TextRenderer {...param}>{inputValue.length}</TextRenderer>
        <TextRenderer {...param}>/{maxLength}</TextRenderer>
      </div>
    )
  }

  const getInfo = () => {
    if (utils.isEmpty(inputParam.infoType) !== true) {
      return (
        <div className={'formTextareaGroupInfo ' + inputParam.infoType} dangerouslySetInnerHTML={{ __html: inputParam.infoMessage }}></div>
      )
    }
    return '';
  }

  const getBasicTextarea = () => {
    return (
      <Fragment>
        <div className="formTextareaGroupInner">
          {getInput()}
          <div className="formTextareaGroupBottom">
            {getInputLength()}
          </div>
        </div>
        {getInfo()}
      </Fragment>
    )
  }

  const getCommentTextarea = () => {
    const warningParam = {
      mode: 'icontext',
      btnClass: 'commentWarningBtn',
      size: 'B12',
      color: 'Medium',
      icon: 'warningGrey',
      iconsize: 16,
    }
    const regiParam = {
      mode: 'text',
      btnClass: (mode === 'replycomment') ? 'btnSmall btnExtraL50 commentRegiBtn' : 'btnSmall btnWhite commentRegiBtn',
      size: 'B12',
      color: (mode === 'replycomment') ? 'Dark' : 'Point',
    }
    return (
      <Fragment>
        <div className="formTextareaGroupBody">
          <div className="formTextareaGroupInner">
            <div className="formTextareaGroupComment">
              <div className="formTextareaGroupCommentCell">
                {getInput()}
              </div>
              <div className="formTextareaGroupCommentCell sub">
                <div className="formTextareaGroupCommentSub">
                  <div className="formTextareaGroupCommentCellS warning"><LinkRenderer {...warningParam}>댓글 작성 유의사항</LinkRenderer></div>
                  <div className="formTextareaGroupCommentCellS length">{getInputLength()}</div>
                  <div className="formTextareaGroupCommentCellS btn"><LinkRenderer {...regiParam}>등록</LinkRenderer></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

  const getBasic = () => {
    if (mode === 'comment' || mode === 'replycomment') {
      return getCommentTextarea();
    } else {
      return getBasicTextarea();
    }
  }

  return (
    <div className={'formTextareaGroup ' + mode + (inputFocus ? ' focus' : '') + (inputValLength ? ' on' : '') + (inputParam.disabled === 'Y' ? ' disabled' : '')}>
      {getBasic()}
    </div>
  )
}

export default withStyles(styles)(TextareaGroup);