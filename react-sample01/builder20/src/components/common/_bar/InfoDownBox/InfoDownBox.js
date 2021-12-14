import React, { Fragment, Children } from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import { Icon, TextRenderer } from 'components';
import styles from './InfoDownBox.scss';
import utils from 'utils';
import { useState } from 'hooks';


const InfoDownBoxBasic = (props) => {
  const [selectedValue, setSelectedValue] = useState(false);

  const getTitle = (props) => {
    const param = {
      size: 'B14B',
      color: 'Dark',
      textClass: 'Ellipsis'
    }
    return (
      <div className="InfoDownBoxHeader">
        {props.mode === 'notice' && <Icon icon="infoBlack" iconsize="20"></Icon>}
        <TextRenderer {...param}>{props.title}</TextRenderer>
      </div>
    )
  }

  const getAuthor = (props) => {
    if (!utils.isEmpty(props.authorList)) {
      const authorHtml = props.authorList.map((item, index) => {
        return (
          <li key={index}>
            <TextRenderer size="B14" color="Medium" textClass="InfoDownBoxAuthorTitle">{item.title}</TextRenderer>
            <TextRenderer size="B14" color="Dark" textClass="InfoDownBoxAuthorText">{item.text}</TextRenderer>
          </li>
        )
      })
      return (
        <div className="InfoDownBoxAuthor">
          <ul>
            {authorHtml}
          </ul>
        </div>
      )      
    }
    return '';
  }
    
  const getContent = (props) => {
    const param = {
      size: 'B14B',
      color: 'Dark',
      textClass: 'Ellipsis'
    }

    let tBooksInfo = '';
    let tBooksInfoTi = '';
    if (props.mode === 'hidden') {
      tBooksInfoTi = <TextRenderer {...param}>도서정보</TextRenderer>;
      tBooksInfo = <span dangerouslySetInnerHTML={{ __html: props.bookinfo }}></span>;
    }

    return (
      <div className="InfoDownBoxCo">
        <div className="InfoDownBoxCoInner">
          {/* <span>{props.children}</span> */}
          <span dangerouslySetInnerHTML={{ __html: props.desc }}></span>
          {tBooksInfoTi}
          {tBooksInfo}
        </div>
      </div>
    )
  }
    
  const getBasicLink = (props) => {
    const param = {
      className: 'InfoDownBoxMoreLink',
      onClick: (e) => {
        e.preventDefault();
        setSelectedValue(!selectedValue);
      }
    }
    return (
      <div className="InfoDownBoxMore">
        <a {...param}><Icon icon="downGrey" iconsize="24">열기</Icon></a>
      </div>
    )
  }

  return (
    <div className={'InfoDownBox ' + props.mode + (selectedValue ? ' open' : ' close')}>
      <div className="InfoDownBoxWrap">
        <div className="InfoDownBoxInner">
          {getTitle(props)}
          {(props.mode === 'author') && getAuthor(props)}
          {getContent(props)}
          {getBasicLink(props)}
        </div>
      </div>
    </div>
  )
}

const InfoDownBoxWrap = {
  basic: InfoDownBoxBasic
}

const InfoDownBox = (props) => {
  const getTag = (props) => {
    let Renderer;
    if (props.mode === 'basic' || props.mode === 'author' || props.mode === 'notice' || props.mode === 'hidden') {
      Renderer = InfoDownBoxWrap.basic
    } else {
      Renderer = InfoDownBoxWrap.basic
    }

    return <Renderer {...props}></Renderer>
  }

  return (
    <Fragment>
      {getTag(props)}
    </Fragment>
  )
}

export default withStyles(styles)(InfoDownBox);