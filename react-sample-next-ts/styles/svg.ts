import styled, { css } from 'styled-components';
import mixin from 'styles/utils'

//---------------- import
//icon
import icon_search from "styles/svg/icon_search.svg";
import icon_alarm from "styles/svg/icon_alarm.svg";
import icon_cart from "styles/svg/icon_cart.svg";
import icon_home from "styles/svg/icon_home.svg";
import icon_category from "styles/svg/icon_category.svg";
import icon_myheart from "styles/svg/icon_myheart.svg";
import icon_my from "styles/svg/icon_my.svg";
import icon_select_arrow from "styles/svg/icon_select_arrow.svg";
import icon_heart from "styles/svg/icon_heart.svg";
import icon_star from "styles/svg/icon_star.svg";

//btn
import btn_bnb_men from "styles/svg/btn_bnb_men.svg";
import btn_bnb_women from "styles/svg/btn_bnb_women.svg";
import btn_page_top from "styles/svg/btn_page_top.svg";
import btn_history from "styles/svg/btn_history.svg";

//logo
import logo_W from "styles/svg/logo_W.svg";
import logo_dstance from "styles/svg/logo_dstance.svg";

//---------------- utils
const getStyle = (w: number, h:number) => {
  return css`
    ${mixin.getSizeBox(w, h)}
  `
}

//---------------- styled
//icon
export const IconSearch = styled(icon_search)` ${getStyle(32, 32)} `;
export const IconAlarm = styled(icon_alarm)` ${getStyle(32, 32)} `;
export const IconCart = styled(icon_cart)` ${getStyle(32, 32)} `;
export const IconHome = styled(icon_home)` ${getStyle(32, 32)} `;
export const IconCategory = styled(icon_category)` ${getStyle(32, 32)} `;
export const IconMyheart = styled(icon_myheart)` ${getStyle(32, 32)} `;
export const IconMy = styled(icon_my)` ${getStyle(32, 32)} `;
export const IconSelArrow = styled(icon_select_arrow)` ${getStyle(16, 16)} `;
export const IconHeart = styled(icon_heart)` ${getStyle(16, 16)} `;
export const IconStar = styled(icon_star)` ${getStyle(12, 12)} `;

//btn
export const BtnBnbMen = styled(btn_bnb_men)` ${getStyle(60, 60)} `;
export const BtnBnbWomen = styled(btn_bnb_women)` ${getStyle(60, 60)} `;
export const BtnBnbTop = styled(btn_page_top)` ${getStyle(40, 40)} `;
export const BtnBnbHistory = styled(btn_history)` ${getStyle(40, 40)} `;

//logo
export const LogoW = styled(logo_W)` ${getStyle(50, 50)} `;
export const LogoDSTANCE = styled(logo_dstance)` ${getStyle(114, 50)} `;
