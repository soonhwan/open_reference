import styled, { css } from 'styled-components';
import mixin from 'styles/utils'

//---------------- import
//icon
import ico_search from "styles/svg/ico_search.svg";
import ico_alarm from "styles/svg/ico_alarm.svg";
import ico_cart from "styles/svg/ico_cart.svg";
import ico_home from "styles/svg/ico_home.svg";
import icon_category from "styles/svg/icon_category.svg";
import icon_myheart from "styles/svg/icon_myheart.svg";
import icon_my from "styles/svg/icon_my.svg";

//logo
import logo_W from "styles/svg/logo_W.svg";
import logo_dstance from "styles/svg/logo_dstance.svg";

//btn
import btn_bnb_men from "styles/svg/btn_bnb_men.svg";
import btn_bnb_women from "styles/svg/btn_bnb_women.svg";
import btn_page_top from "styles/svg/btn_page_top.svg";
import btn_history from "styles/svg/btn_history.svg";

//---------------- utils
const getStyle = (w: number, h:number) => {
  return css`
    ${mixin.getSizeBox(w, h)}
  `
}

//---------------- styled
export const IconSearch = styled(ico_search)` ${getStyle(32, 32)} `;
export const IconAlarm = styled(ico_alarm)` ${getStyle(32, 32)} `;
export const IconCart = styled(ico_cart)` ${getStyle(32, 32)} `;
export const IconHome = styled(ico_home)` ${getStyle(32, 32)} `;
export const IconCategory = styled(icon_category)` ${getStyle(32, 32)} `;
export const IconMyheart = styled(icon_myheart)` ${getStyle(32, 32)} `;
export const IconMy = styled(icon_my)` ${getStyle(32, 32)} `;
export const LogoW = styled(logo_W)` ${getStyle(50, 50)} `;
export const LogoDSTANCE = styled(logo_dstance)` ${getStyle(114, 50)} `;
export const BtnBnbMen = styled(btn_bnb_men)` ${getStyle(60, 60)} `;
export const BtnBnbWomen = styled(btn_bnb_women)` ${getStyle(60, 60)} `;
export const BtnBnbTop = styled(btn_page_top)` ${getStyle(40, 40)} `;
export const BtnBnbHistory = styled(btn_history)` ${getStyle(40, 40)} `;
