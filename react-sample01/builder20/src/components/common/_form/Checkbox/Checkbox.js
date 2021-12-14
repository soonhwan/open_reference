import React, { Fragment } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles'
import utils from 'utils';
import { useState } from 'hooks';
import styles from './Checkbox.scss';

const Checkbox = ({ mode, name, formClass, checked, disabled, readOnly, children, subText, prevEvent, onEvent }) => {
  const [selectedValue, setSelectedValue] = useState(checked);

  const _id = utils.getAutoGenId();

  const tFormClass = formClass ? ' ' + formClass : '';
  const param = {
    type: 'checkbox',
    id: _id,
    name: name,
    checked: selectedValue,
    disabled: disabled,
    readOnly: readOnly,
    onChange: (e) => {
      setSelectedValue(!selectedValue);
      onEvent('change_Checkbox', !selectedValue, e); // eventName, state, event
    }
  }

  if (formClass) {
    param.className = 'formClass';
  };

  const getLabel = () => {
    return (
      <label className="formCheckboxLabel" htmlFor={_id}>
        <span>
          {children}
          {utils.isEmpty(subText) ? '' : <em dangerouslySetInnerHTML={{ __html: subText }} />}
        </span>
      </label>
    )
  }

  const getTextLabel = () => {
    return (
      <div className="formCheckboxLabel">
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
    <div className={'formCheckbox' + tFormClass + (utils.isEmpty(mode) ? '' : ' ' + mode)}>
      <div className="formCheckboxInner">
        {getInput()}
      </div>
    </div>
  )
}

export default withStyles(styles)(Checkbox);