import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import LoginPopup from '@src/components/common/popup/Login';
import TabMenu from '@lib/share/tab/TabMenu';
import TabCont from '@lib/share/tab/TabCont';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';

import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import { SECTION_CUSTOMER } from '@src/actions/types';

const Inquiry = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_CUSTOMER });

  const [rodalShow1, setRodalShow1, rodalPopupHandler1, modalCloseHandler1] = useRodal(false, true);
  return (
    <AppLayout>
      <div className="content-sec">
        <div className="content-wrap help-inquiry-wrap">
          <h3>고객센터</h3>
          
          <TabMenu type="type1" defaultTab={1} tabLink={[
              { index: 0, url: '/customer/noticeList' }, 
              { index: 1, url: '/customer/inquiry' }, 
              { index: 2, url: '/customer/faq' }
              
            ]}>
            <TabCont tabTitle="공지사항" id="tab1-1" index={0}></TabCont>
            <TabCont tabTitle="1:1상담" id="tab1-2" index={1}>
              <div className="tit">
                <h4>궁금한 점이나, 불편한 점이 있으신가요?</h4>
                <p>오토벨 서비스 이용중, 궁금하시거나 불편한 사항을 1:1 문의로 남겨주세요.</p>
              </div>
              <div className="ico-wrap">
                <i className="ico-inquiry"></i>
              </div>
              <div className="center-wrap">
                <p>오토벨 고객센터<span className="num">1600-000</span></p>
                <ul>
                  <li>평일 00:00~00:00</li>
                  <li>주말/공휴일 OFF</li>
                </ul>
              </div>
            </TabCont>
            <TabCont tabTitle="FAQ" id="tab1-3" index={2}></TabCont>
          </TabMenu>
          <Buttons align="center">
            <Button size="big" background="blue80" title="1:1 문의하기" width={180} height={60} onClick={(e) => rodalPopupHandler1(e, "fade")} />
          </Buttons>
        </div>
      </div>

      <RodalPopup show={rodalShow1} type={'slideUp'} closedHandler={modalCloseHandler1} mode="normal" size="small" title="로그인">
        <LoginPopup />
      </RodalPopup>
    </AppLayout>
  )
}

export default Inquiry