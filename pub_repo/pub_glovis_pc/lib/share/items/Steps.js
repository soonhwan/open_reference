import { useCallback } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { transformText } from '@src/utils/CommonUtil';

const Steps = ({type, contents, subContents, active, mode="normal", links, reverse=false, marginTop, marginBottom, onClickArr}) => {
  let stepsType = '';
  if (contents.length === 3) {
    stepsType = `steps-tp${type} step3`;
  } else if (contents.length === 6) {
    stepsType = `steps-tp${type} step6`;
  } else {
    stepsType = `steps-tp${type}`;
  }
  if (reverse) stepsType += ' reverse';
  const createStep1 = useCallback((v, i) => <><p>{transformText(v)}</p><div className="step-ico">{type === 1 && <i className="ico-check-white"></i>}</div>{subContents !== undefined && <p className="sub-contents">{transformText(subContents[i])}</p>}</>, []);
  const createStep2 = useCallback((v, i) => <><p>{transformText(v)}</p><div className="step-ico">{type === 1 && i+1}</div>{subContents !== undefined && <p className="sub-contents">{transformText(subContents[i])}</p>}</>, []);
  let stepsStyle = {};
  if (marginTop !== undefined) stepsStyle.marginTop = marginTop + 'px';
  if (marginBottom !== undefined) stepsStyle.marginBottom = marginBottom + 'px';

  return (
    <div className={stepsType} style={stepsStyle}>
      {contents.map((v, i) => {
        if (i <= active-2) {
          return (
            <div className={
              (type === 1)
                ? (i === active-2) ? "step-finish edge" : "step-finish"
                : (i === active-2) ? "step-progress edge" : "step-progress"
            } key={i}>
              {mode === "hasLink" ? <Link href={links[i]}><a onClick={onClickArr ? onClickArr[i] : null}>{createStep1(v, i)}</a></Link> : createStep1(v, i)}
            </div>
          )
        } else {
          return (
            <div className={(i+1 === active) ? "step-progress" : "step-wait"} key={i}>
              {mode === "hasLink" ? <Link href={links[i]}><a onClick={onClickArr ? onClickArr[i] : null}>{createStep2(v, i)}</a></Link> : createStep2(v, i)}
            </div>
          )
        }
      })}
    </div>
  )
}

Steps.propTypes = {
  type: PropTypes.number,
  contents: PropTypes.array,
  subContents: PropTypes.array,
  active: PropTypes.number,
  mode: PropTypes.string,
  links: PropTypes.array,
  reverse: PropTypes.bool,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  onClickArr: PropTypes.array,
}

export default Steps;