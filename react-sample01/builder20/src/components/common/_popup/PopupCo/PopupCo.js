import React, { Fragment, Children } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { LinkRenderer, TextRenderer, Checkbox } from 'components';
import styles from './PopupCo.scss';

const PopupCo = {
  para: ({ children }) => { return (<div className="PopupCustomPara">{children}</div>) },
  roundBox: ({ children }) => { return (<div className="PopupCustomRoundBox"><div className="PopupCustomRoundBoxInner">{children}</div></div>) },
  list: ({ children }) => { return (<ul className="PopupCustomList">{children}</ul>) },
  listItem: ({ children }) => { return (<li>{children}</li>) },
  terms: ({ children }) => { return (<ul className="PopupCustomTerms">{children}</ul>) },
  termsItem: ({ children }) => { return (<li>{children}</li>) },
  termsTitle: ({ children }) => { return (<div className="PopupCustomTermsTitle">{children}</div>) },
  termsDetail: ({ children }) => { return (<div className="PopupCustomTermsDetail">{children}</div>) }
}

export default withStyles(styles)(PopupCo);