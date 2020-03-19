import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import DatePicker from '@src/components/common/calendar/DatePicker';
import PageNavigator from '@src/components/common/PageNavigator';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import SelectBox from '@lib/share/items/SelectBox';
import Input from '@lib/share/items/Input';
import { select1_list } from '@src/dummy';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerMember03_02 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi mode="dealer" />

        <div className="mypage-state-sec dealer-info">
          <div className="mypage-admin-title">
            <h3>딜러정보 관리</h3>
          </div>

          <table summary="소속딜러 정보" className="table-tp1 th-c">
            <caption>[소속딜러] 장현대</caption>
            <colgroup>
              <col width="20%" />
              <col width="80%" />
            </colgroup>
            <tbody>
              <tr>
                <th>종사원증 번호</th>
                <td>
                  <Input type="text" id="num1" width={230} height={40} />
                  <em className="mg8"></em>
                  <DatePicker inputWidth={230} inputHeight={40} />
                </td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>
                  <Input type="text" id="record01" width={148} height={40} />
                  <em className="mg8">-</em>
                  <Input type="text" id="record02" width={148} height={40} />
                  <em className="mg8">-</em>
                  <Input type="text" id="record03" width={148} height={40} />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="tx-list">
            <p class="inquire-num">배정차량 (7대)</p>
            <table summary="딜러 배정차량" className="table-tp1 th-c td-c">
              <caption className="away">딜러 배정차량</caption>
              <colgroup>
                <col width="8%" />
                <col width="47%" />
                <col width="15%" />
                <col width="30%" />
              </colgroup>
              <thead>
                <tr>
                  <th>NO.</th>
                  <th>차량명(기본정보)</th>
                  <th>가격(만원)</th>
                  <th>연락처 변경</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7</td>
                  <td className="info">
                    기아 더 프레스티지 K7 3.0 GDI 럭셔리<br />
                    <ul>
                      <li>( 00가0000</li>
                      <li>09/12식(10년형)</li>
                      <li>84,761km</li>
                      <li>오토</li>
                      <li>디젤 )</li>
                    </ul>
                  </td>
                  <td>4,000</td>
                  <td><SelectBox id="num3" className="items-sbox" options={select1_list} placeHolder="장현대(010-1234-5678)" width={210} height={40} /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td className="info">
                    기아 더 프레스티지 K7 3.0 GDI 럭셔리<br />
                    <ul>
                      <li>( 00가0000</li>
                      <li>09/12식(10년형)</li>
                      <li>84,761km</li>
                      <li>오토</li>
                      <li>디젤 )</li>
                    </ul>
                  </td>
                  <td>4,000</td>
                  <td><SelectBox id="num3" className="items-sbox" options={select1_list} placeHolder="장현대(010-1234-5678)" width={210} height={40} /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td className="info">
                    기아 더 프레스티지 K7 3.0 GDI 럭셔리<br />
                    <ul>
                      <li>( 00가0000</li>
                      <li>09/12식(10년형)</li>
                      <li>84,761km</li>
                      <li>오토</li>
                      <li>디젤 )</li>
                    </ul>
                  </td>
                  <td>4,000</td>
                  <td><SelectBox id="num3" className="items-sbox" options={select1_list} placeHolder="장현대(010-1234-5678)" width={210} height={40} /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td className="info">
                    기아 더 프레스티지 K7 3.0 GDI 럭셔리<br />
                    <ul>
                      <li>( 00가0000</li>
                      <li>09/12식(10년형)</li>
                      <li>84,761km</li>
                      <li>오토</li>
                      <li>디젤 )</li>
                    </ul>
                  </td>
                  <td>4,000</td>
                  <td><SelectBox id="num3" className="items-sbox" options={select1_list} placeHolder="장현대(010-1234-5678)" width={210} height={40} /></td>
                </tr>
              </tbody>
            </table>
            <PageNavigator recordCount={50} />
          </div>

          <Buttons align="center" marginTop={110}>
            <Button size="big" background="gray" title="취소" width={130} height={48}/>
            <Button size="big" background="blue80" title="수정" width={130} height={48}/>
          </Buttons>
        </div>
      </div>
    </AppLayout>
  )
}

export default DealerMember03_02
