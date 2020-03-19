import { useState, useEffect } from 'react'
import Link from "next/link"
import PropTypes from "prop-types"
import { Mac } from "../../../src/utils/CommonUtil"

const Button = ({size, color, background, line, radius=false, title, sub, width, height, lineHeight, circle=false, iconType, marginLeft, marginTop, marginRight, marginBottom, nextLink=false, href='', target='_self', className, onClick, buttonMarkup=false, fontSize}) => {
  
  let btn_style = 'btn-base';
  if (color !== undefined) btn_style += ' tx-' + color;
  if (background !== undefined) btn_style += ' bg-' + background;  
  if (line !== undefined) btn_style += ' line-' + line;
  if (size) btn_style += ' ' + size;
  if (radius) btn_style += ' radius';
  if (circle) btn_style += ' circle';
  if (sub !== undefined) btn_style += ' ws';
  if (className !== undefined) btn_style += ' ' + className;

  const [btnClass, setBtnClass] = useState(btn_style)
  useEffect(() => {
    if (Mac) setBtnClass(btn_style + ' mac')
  }, [])

  let marginStyle = {};
  if (marginLeft !== undefined) marginStyle.marginLeft = marginLeft;
  if (marginTop !== undefined) marginStyle.marginTop = marginTop;
  if (marginRight !== undefined) marginStyle.marginRight = marginRight;
  if (marginBottom !== undefined) marginStyle.marginBottom = marginBottom;

  const createTitle = () => {
    let titleArr = [];
    let _title = title.split('<br />')
    if(_title.length > 1) {
      _title.map((v, i) => {
        if(i < _title.length-1) {
          titleArr.push(<span key={i}>{v}<br /></span>)
        } else {
          titleArr.push(<span key={i}>{v}</span>)
        }
      })
      return titleArr
    } else {
      return title
    }
  }

  let customStyle = {};
  if (width !== undefined) customStyle.width = width + 'px';
  if (height !== undefined) {
    customStyle.height = height + 'px';
    if (lineHeight !== undefined) {
      customStyle.lineHeight = lineHeight + 'px';
    } else {
      if (sub !== undefined) {
        customStyle.lineHeight = 1;
      } else {
        customStyle.lineHeight = (line !== undefined) ? height-2 + 'px' : height + 'px';
      }
    } 
  }
  if (fontSize !== undefined) {
    customStyle.fontSize = fontSize + 'px';
  }

  let combineStyle = Object.assign(marginStyle, customStyle);

  return (
    <span className={btnClass} style={combineStyle} onClick={onClick}> 
      {
        nextLink
      ? <Link href={href}><a>{createTitle()}{iconType !== undefined && <i className={`ico-${iconType}`}></i>}{sub !== undefined && <em>{sub}</em>}</a></Link>
        : buttonMarkup?
          <button type="button">{createTitle()}{iconType !== undefined && <i className={`ico-${iconType}`}></i>}{sub !== undefined && <em>{sub}</em>}</button>
          :
          <a href={href} target={target}>{createTitle()}{iconType !== undefined && <i className={`ico-${iconType}`}></i>}{sub !== undefined && <em>{sub}</em>}</a>
      }      
    </span>
  )
}

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  radius: PropTypes.bool,
  title: PropTypes.string,
  sub: PropTypes.string,
  width: PropTypes.node,
  height: PropTypes.node,
  lineHeight: PropTypes.number,
  circle: PropTypes.bool,
  iconType: PropTypes.string,
  marginLeft: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  nextLink: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  buttonMarkup: PropTypes.bool,
  fontSize: PropTypes.number,
}

export default React.memo(Button)