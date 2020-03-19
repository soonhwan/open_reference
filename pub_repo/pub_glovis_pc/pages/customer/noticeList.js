import { useDispatch } from 'react-redux';
import Link from 'next/link';
import AppLayout from '@src/components/layouts/AppLayout';
import PageNavigator from '@src/components/common/PageNavigator';
import TabMenu from '@lib/share/tab/TabMenu';
import TabCont from '@lib/share/tab/TabCont';
import { SECTION_CUSTOMER } from '@src/actions/types';

const NoticeList = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_CUSTOMER });

  return (
    <AppLayout>
      <div className="content-sec">
        <div className="content-wrap help-notice-wrap">
          <h3>고객센터</h3>
          
          <TabMenu type="type1" defaultTab={0} tabLink={[
              { index: 0, url: '/customer/noticeList' }, 
              { index: 1, url: '/customer/inquiry' }, 
              { index: 2, url: '/customer/faq' }
              
            ]}>
            <TabCont tabTitle="공지사항" id="tab1-1" index={0}>
              <table summary="결제 정보에 대한 내용" className="table-tp1 th-c td-c">
                <caption className="away">공지사항</caption>
                <colgroup>
                  <col width="10%" />
                  <col width="77%" />
                  <col width="13%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>제목</th>
                    <th>등록일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="notice">공지</span></td>
                    <td><Link href="/customer/noticeview"><a><span className="tx-blue80">[시스템]</span>성능점검 기준 변경 공지</a></Link></td>
                    <td>2013.05.28</td>
                  </tr>
                  <tr>
                    <td><span className="notice">공지</span></td>
                    <td><Link href="/customer/noticeview"><a><span className="tx-blue80">[시스템]</span>오토옥션 증강현실앱 서비스 오픈</a></Link><i className="ico-file"></i></td>
                    <td>2013.05.28</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td><Link href="/customer/noticeview"><a>[시스템]성능점검 기준 변경 공지</a></Link></td>
                    <td>2013.05.28</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td><Link href="/customer/noticeview"><a>[시스템]성능점검 기준 변경 공지</a></Link></td>
                    <td>2013.05.28</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td><Link href="/customer/noticeview"><a>[시스템]성능점검 기준 변경 공지</a></Link></td>
                    <td>2013.05.28</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td><Link href="/customer/noticeview"><a>[시스템]성능점검 기준 변경 공지</a></Link></td>
                    <td>2013.05.28</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td><Link href="/customer/noticeview"><a>[시스템]성능점검 기준 변경 공지</a></Link></td>
                    <td>2013.05.28</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td><Link href="/customer/noticeview"><a>[시스템]성능점검 기준 변경 공지</a></Link></td>
                    <td>2013.05.28</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td><Link href="/customer/noticeview"><a>[시스템]성능점검 기준 변경 공지</a></Link></td>
                    <td>2013.05.28</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td><Link href="/customer/noticeview"><a>[시스템]성능점검 기준 변경 공지</a></Link></td>
                    <td>2013.05.28</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td><Link href="/customer/noticeview"><a>[시스템]성능점검 기준 변경 공지</a></Link></td>
                    <td>2013.05.28</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td><Link href="/customer/noticeview"><a>[시스템]성능점검 기준 변경 공지</a></Link></td>
                    <td>2013.05.28</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td><Link href="/customer/noticeview"><a>[시스템]성능점검 기준 변경 공지</a></Link></td>
                    <td>2013.05.28</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td><Link href="/customer/noticeview"><a>[시스템]성능점검 기준 변경 공지</a></Link></td>
                    <td>2013.05.28</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td><Link href="/customer/noticeview"><a><span className="tx-blue80">[공지분류]</span>성능점검 기준 변경 공지</a></Link></td>
                    <td>2013.05.28</td>
                  </tr>
                </tbody>
              </table>
              <PageNavigator recordCount={50} className="mt40" />
            </TabCont>
            <TabCont tabTitle="1:1상담" id="tab1-2" index={1}></TabCont>
            <TabCont tabTitle="FAQ" id="tab1-3" index={2}></TabCont>
          </TabMenu>
        </div>
      </div>
    </AppLayout>
  )
}

export default NoticeList