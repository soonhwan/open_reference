import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import Button from '@lib/share/items/Button';
import SelectBox from '@lib/share/items/SelectBox';
import PageNavigator from '@src/components/common/PageNavigator';
import { select1_list } from '@src/dummy';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerSell06 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi mode="dealer" />
        
        <div className="mypage-state-sec live-studio">
          <div className="top-banner">
            <p>Live Studio 촬영을<br />예약하세요.</p>
            <div className="btn-wrap">
              <Button line="white" color="white" radius={true} title="Live Studio란?" width={155} height={48} marginTop={19} marginBottom={16} />
              <Button line="white" color="white" radius={true} title="예약하기" width={155} height={48} />
            </div>
          </div>

          <div className="live-list-sec">
            <div className="search-area">
              <ul>
                <li>이용서비스</li>
                <li><SelectBox id="select1" className="items-sbox" options={select1_list} /></li>
                <li>결제수단</li>
                <li><SelectBox id="select1" className="items-sbox" options={select1_list} /></li>
                <li>차량번호</li>
                <li><SelectBox id="select1" className="items-sbox" options={select1_list} /></li>
                <li>상태</li>
                <li><SelectBox id="select1" className="items-sbox" options={select1_list} /></li>
              </ul>
              <Button background="blue80" title="조회" width={114} height={40} />
            </div>
            <div className="tx-list">
              <table className="table-tp1 th-c td-c" summary="결제내역에 대한 내용">
                <caption className="away">결제내역</caption>
                <colgroup>
                  <col width="7%" />
                  <col width="10%" />
                  <col width="10%" />
                  <col width="23%" />
                  <col width="10%" />
                  <col width="8%" />
                  <col width="12%" />
                  <col width="10%" />
                  <col width="10%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>방문예약 일시</th>
                    <th>방문지점</th>
                    <th>이용서비스</th>
                    <th>차량번호</th>
                    <th>광고가</th>
                    <th>결제금액</th>
                    <th>결제수단</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2019-09-16 11:00</td>
                    <td>강남</td>
                    <td>[상품명 노출영역]</td>
                    <td>11가 3456</td>
                    <td>2,200<br />만원</td>
                    <td>230,000원</td>
                    <td>무통장<br />(입금완료)</td>
                    <td>예약완료</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2019-09-16 11:00</td>
                    <td>강남</td>
                    <td>[상품명 노출영역]</td>
                    <td>11가 3456</td>
                    <td>2,200<br />만원</td>
                    <td>230,000원</td>
                    <td>무통장<br />(입금완료)</td>
                    <td>예약완료</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2019-09-16 11:00</td>
                    <td>강남</td>
                    <td>[상품명 노출영역]</td>
                    <td>11가 3456</td>
                    <td>2,200<br />만원</td>
                    <td>230,000원</td>
                    <td>무통장<br />(입금완료)</td>
                    <td>예약완료</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2019-09-16 11:00</td>
                    <td>강남</td>
                    <td>[상품명 노출영역]</td>
                    <td>11가 3456</td>
                    <td>2,200<br />만원</td>
                    <td>230,000원</td>
                    <td>무통장<br />(입금완료)</td>
                    <td>예약완료</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2019-09-16 11:00</td>
                    <td>강남</td>
                    <td>[상품명 노출영역]</td>
                    <td>11가 3456</td>
                    <td>2,200<br />만원</td>
                    <td>230,000원</td>
                    <td>무통장<br />(입금완료)</td>
                    <td>예약완료</td>
                  </tr>
                </tbody>
              </table>
              <PageNavigator recordCount={50} />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default DealerSell06