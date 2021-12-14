import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import utils from 'utils';
import { useState } from 'hooks';
import styles from './Radio.scss';

const Radio = ({ mode, name, formClass, checked, disabled, readOnly, children, subText, prevEvent, onEvent }) => {
  const [selectedValue, setSelectedValue] = useState(checked);

  const _id = utils.getAutoGenId();

  const tFormClass = formClass ? ' ' + formClass : '';
  const param = {
    type: 'radio',
    id: _id,
    name: name,
    checked: selectedValue,
    disabled: disabled,
    readOnly: readOnly,
    onChange: (e) => {
      setSelectedValue(!selectedValue);
      onEvent('change_Radio', !selectedValue, e); // eventName, state, event
    }
  }

  if (formClass) {
    param.className = 'formClass';
  };

  const getLabel = () => {
    return (
      <label className="formRadioLabel" htmlFor={_id}>
        <span>
          {children}
          {utils.isEmpty(subText) ? '' : <em dangerouslySetInnerHTML={{ __html: subText }} />}
        </span>
      </label>
    )
  }

  const getTextLabel = () => {
    return (
      <div className="formRadioLabel">
        <span>
          {children}
          {utils.isEmpty(subText) ? '' : <em dangerouslySetInnerHTML={{ __html: subText }} />}
        </span>
      </div>
    )
  }

  const getInput = () => {
    if (mode === 'textType') {
      return (
        <Fragment>
          {getTextLabel()}
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <input {...param} />
          {getLabel()}
        </Fragment>
      )
    }
  }

  return (
    <div className={'formRadio' + tFormClass + (utils.isEmpty(mode) ? '' : ' ' + mode)}>
      <div className="formRadioInner">
        {getInput()}
      </div>
    </div>
  )
}

export default withStyles(styles)(Radio);