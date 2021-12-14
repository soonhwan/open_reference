import React from 'react';

import { action } from '@storybook/addon-actions';
import { Icon } from 'components';

export default {
  title: 'Components|Common',
};

export const iconList = () => {
  const iconList = [
    { icon: 'homelogo', size: '', style: { width: '100px', height: '40px' } },
    { icon: 'homelogoSelect', size: '', style: { width: '100px', height: '40px' } },
    { icon: 'passlogo', size: '', style: { width: '100px', height: '40px' } },
    { icon: 'passlogoSelect', size: '', style: { width: '100px', height: '40px' } },
    { icon: 'logobooks', size: '', style: { width: '100px', height: '40px' } },
    { icon: 'logobooksSel', size: '', style: { width: '100px', height: '40px' } },
    { icon: 'logopass', size: '', style: { width: '100px', height: '40px' } },
    { icon: 'logopassSel', size: '', style: { width: '100px', height: '40px' } },

    { icon: 'avgscore', size: '12', style: { width: '100px', height: '22px' } },
    { icon: 'comment', size: '12', style: { width: '100px', height: '22px' } },
    { icon: 'timefree', size: '14', style: { width: '100px', height: '22px' } },

    { icon: 'adult', size: '16', style: { width: '100px', height: '22px' } },
    { icon: 'audiobook', size: '16', style: { width: '100px', height: '22px' } },
    { icon: 'avgscore', size: '16', style: { width: '100px', height: '22px' } },
    { icon: 'optionOff', size: '16', style: { width: '100px', height: '22px' } },
    { icon: 'optionOn', size: '16', style: { width: '100px', height: '22px' } },
    { icon: 'comment', size: '16', style: { width: '100px', height: '22px' } },

    { icon: 'optionOff', size: '18', style: { width: '100px', height: '22px' } },
    { icon: 'optionOn', size: '18', style: { width: '100px', height: '22px' } },

    { icon: 'searchdel', size: '20', style: { width: '100px', height: '22px' } },
    { icon: 'dropup', size: '20', style: { width: '100px', height: '22px' } },
    { icon: 'dropdown', size: '20', style: { width: '100px', height: '22px' } },
    { icon: 'linkright', size: '20', style: { width: '100px', height: '22px' } },
    { icon: 'linkleft', size: '20', style: { width: '100px', height: '22px' } },
    { icon: 'search', size: '20', style: { width: '100px', height: '22px' } },

    { icon: 'bookclip', size: '24', style: { width: '100px', height: '24px' } },
    { icon: 'cash', size: '24', style: { width: '100px', height: '24px' } },
    { icon: 'customer', size: '24', style: { width: '100px', height: '24px' } },
    { icon: 'gift', size: '24', style: { width: '100px', height: '24px' } },
    { icon: 'library', size: '24', style: { width: '100px', height: '24px' } },
    { icon: 'like', size: '24', style: { width: '100px', height: '24px' } },
    { icon: 'my', size: '24', style: { width: '100px', height: '24px' } },
    { icon: 'mySel', size: '24', style: { width: '100px', height: '24px' } },
    { icon: 'purchase', size: '24', style: { width: '100px', height: '24px' } },
    { icon: 'search', size: '24', style: { width: '100px', height: '24px' } },
    { icon: 'set', size: '24', style: { width: '100px', height: '24px' } },
    { icon: 'search', size: '24', style: { width: '100px', height: '24px' } },
    { icon: 'noti', size: '24', style: { width: '100px', height: '24px' } },
    { icon: 'notiNew', size: '24', style: { width: '100px', height: '24px' } },
    { icon: 'logout', size: '24', style: { width: '100px', height: '24px' } },

    { icon: 'corePrev', size: '40', style: { width: '100px', height: '40px' } },
    { icon: 'coreNext', size: '40', style: { width: '100px', height: '40px' } },

    { icon: 'check', size: '16', style: { width: '100px', height: '22px' } },
    { icon: 'off', size: '16', style: { width: '100px', height: '22px' } },
    { icon: 'plus', size: '16', style: { width: '100px', height: '22px' } },
    { icon: 'up', size: '16', style: { width: '100px', height: '22px' } },
    { icon: 'down', size: '16', style: { width: '100px', height: '22px' } },

    { icon: 'books', size: '20', style: { width: '100px', height: '24px' } },
    { icon: 'pass', size: '20', style: { width: '100px', height: '24px' } },

  ];



  const iconListHtml = iconList.map((iconInfo, idx) => (
    <li key={idx} style={{ height: iconInfo.style.height }}>
      <dl style={iconInfo.style}>
        <Icon icon={iconInfo.icon} iconsize={iconInfo.size}>{iconInfo.icon}</Icon>  
      </dl>
      <dt>
        {iconInfo.icon + iconInfo.size}
      </dt>
   </li>
  ));

  return (
    <ul className="iconList">
      {iconListHtml}
      <style>{`
          .iconList li {
            height: 46px;
            letter-spacing: 0px;
            /*border-bottom: 1px solid black;*/
            border-bottom: 1px solid;
          }
          .iconList dl {
            float: left;
            // width: 46px;
            // height: 46px;
            background: #efe9d7;
            border-right: 1px solid;
          }
          .iconList dt {
            float: left;
            // line-height: 46px;
            padding-left: 10px;
            font-size: 16px;
          }
          .iconList dl > i {
            position: relative !important;
          }
      `}</style>
    </ul>
  );
}

iconList.story = {
  name: 'Icon',
};
