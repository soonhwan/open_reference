import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import FaqList from '@src/components/common/FaqList';
import PageNavigator from '@src/components/common/PageNavigator';
import TabMenu from '@lib/share/tab/TabMenu';
import TabCont from '@lib/share/tab/TabCont';
import { SECTION_CUSTOMER } from '@src/actions/types';

const Faq = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_CUSTOMER });

  return (
    <AppLayout>
      <div className="content-sec">
        <div className="content-wrap help-faq-wrap">
          <h3>고객센터</h3>
          
          <TabMenu type="type1" defaultTab={2} tabLink={[
              { index: 0, url: '/customer/noticeList' }, 
              { index: 1, url: '/customer/inquiry' }, 
              { index: 2, url: '/customer/faq' }
            ]}>
            <TabCont tabTitle="공지사항" id="tab1-1" index={0}></TabCont>
            <TabCont tabTitle="1:1상담" id="tab1-2" index={1}></TabCont>
            <TabCont tabTitle="FAQ" id="tab1-3" index={2}>
              <p className="ex">더 궁금한 내용이 있으실 경우에는, 1:1 상담 메뉴를 이용해주세요.</p>
              <TabMenu type="type7">
                <TabCont tabTitle="전체" id="tab5-1" index={0}>
                  <FaqList isTitle={false} />
                </TabCont>
                <TabCont tabTitle="내차사기" id="tab5-2" index={1}>
                  Content2
                </TabCont>
                <TabCont tabTitle="내차팔기" id="tab5-3" index={2}>
                  Content3
                </TabCont>
                <TabCont tabTitle="시세조회" id="tab5-4" index={3}>
                  Content4
                </TabCont>
                <TabCont tabTitle="홈서비스" id="tab5-5" index={4}>
                  Content4
                </TabCont>
                <TabCont tabTitle="기타" id="tab5-6" index={5}>
                  Content4
                </TabCont>
              </TabMenu>
              <PageNavigator recordCount={50} className="mt40" />
            </TabCont>
          </TabMenu>
        </div>
      </div>
    </AppLayout>
  )
}

export default Faq