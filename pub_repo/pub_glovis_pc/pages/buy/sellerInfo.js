import moment from 'moment'
import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import DatePicker from '@src/components/common/calendar/DatePicker';
import BannerItem from '@src/components/common/banner/BannerItem';
import TabMenu from '@lib/share/tab/TabMenu';
import TabCont from '@lib/share/tab/TabCont';
import Tooltip from '@lib/share/items/Tooltip';
import TooltipItem from '@lib/share/items/TooltipItem';
import TooltipCont from '@lib/share/items/TooltipCont';
import Button from '@lib/share/items/Button';
import SelectBox from '@lib/share/items/SelectBox';
import RadioGroup from '@lib/share/items/RadioGroup'
import { select1_list, car_list3 } from '@src/dummy';
import { SECTION_BUY } from '@src/actions/types';

const SellerInfo = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_BUY });

  const now = moment();

  // 차량 목록 더보기
  const [listData2, setListData2] = useState(car_list3)
  const dummyData = {
    name: "새로 추가된 차 이름",
    price: "3,100",
    image: "/images/dummy/product-img-01.png",
    alt: "차량 이미지",
    discount: 20,
    isButton: true,
    buttonName: '온라인구매',
    tags: [
      { color: 'blue60', value: 'EW' }
    ],
    infos: ['17/07식', '26,530km', '가솔린', '대구'],
    options: [
      { color: 'red', value: '라이브' }
    ],
    problems: ['사고이력:없음', '단순수리:없음', '압류/저당:0/0'],
    likes: "48",
    id: '새로 추가된 데이터 id'
  };
  const handleListMore2 = (e) => {
    e.preventDefault()
    setListData2(listData2 => [...listData2, dummyData, dummyData, dummyData, dummyData, dummyData])
  };
  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.`);
  }, []);

  return (
    <AppLayout>
      <div className="content-sec">
        <div className="content-wrap view-wrap seller">
          <ul className="tit-wrap">
            <li className="tit"><h3>판매자 정보</h3></li>
          </ul>

          <div className="info-wrap">
            <div className="img-wrap"></div>
            <div className="tx-wrap">
              <h4>김현대</h4>
              <ul className="car-service-label">
                <li>
                  <Tooltip placement="bottomRight" width={306} exception="service-label">
                    <TooltipItem>
                      <em className="tag-tp4 bg-sky80">홈</em>
                    </TooltipItem>
                    <TooltipCont>
                      <p>홈서비스<span>서비스 이용중인 판매자 입니다.</span></p>
                    </TooltipCont>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement="bottomRight" width={306} exception="service-label">
                    <TooltipItem>
                      <em className="tag-tp4 bg-purple">오</em>
                    </TooltipItem>
                    <TooltipCont>
                      <p>오토옥션<span>서비스 이용중인 판매자 입니다.</span></p>
                    </TooltipCont>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement="bottomRight" width={306} exception="service-label">
                    <TooltipItem>
                      <em className="tag-tp4 bg-orange">프</em>
                    </TooltipItem>
                    <TooltipCont>
                      <p>프라이싱<span>서비스 이용중인 판매자 입니다.</span></p>
                    </TooltipCont>
                  </Tooltip>
                </li>
              </ul>
              <table summary="판매자 정보에 대한 내용" className="table-tp1 th-c td-c">
                <caption className="away">판매자 정보</caption>
                <colgroup>
                  <col width="50%" />
                  <col width="50%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>종사원증</th>
                    <td>a1240b56</td>
                  </tr>
                  <tr>
                    <th>매매상사</th>
                    <td>오토벨모터스</td>
                  </tr>
                </tbody>
              </table>
              <ul className="sell-info">
                <li>
                  판매중 차량
                  <span>21</span>
                </li>
                <li>
                  판매완료 차량
                  <span>21</span>
                  <em>(최근12개월: 28대)</em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content-wrap sell-info-wrap">
        <TabMenu type="type1" mount={false}>
          <TabCont tabTitle="판매중 차량" id="tab1-1" index={0}>
            <table className="table-tp1 input search th-c" summary="조회 영역">
              <caption className="away">조회 영역</caption>
              <tbody>
                <tr>
                  <th>차량</th>
                  <td>
                    <SelectBox id="made" className="items-sbox" options={[
                      { value: 'made-all', label: '전체' },
                      { value: 'made-home', label: '국산' },
                      { value: 'made-foreign', label: '수입' }
                    ]} placeHolder="전체" width={282} height={48} />
                    <em></em>
                    <SelectBox id="model" className="items-sbox" options={select1_list} placeHolder="제조사/모델/등급" width={282} height={48} />
                    <Button size="big" background="blue80" title="조회" width={130} className="fr" />
                  </td>
                </tr>
              </tbody>
            </table>
            <ul className="goods-list-ver">
              {listData2.map((v, i) => {
                return (
                  <BannerItem key={v.id} name={v.name} price={v.price} image={v.image} alt={v.alt} isButton={v.isButton} buttonName={v.buttonName} tags={v.tags} infos={v.infos} options={v.options} problems={v.problems} likes={v.likes} bannerType={"vertical"} btnClick={handleBtnClick} btnId={v.id} />
                )
              })}
            </ul>
            <div className="cate-list-btn2">
              <button onClick={handleListMore2}>더보기</button>
            </div>
          </TabCont>
          <TabCont tabTitle="판매완료 차량" id="tab1-2" index={1}>
            <table className="table-tp1 input search th-c" summary="조회 영역">
              <caption className="away">조회 영역</caption>
              <tbody>
                <tr>
                  <th>차량</th>
                  <td>
                    <SelectBox id="made" className="items-sbox" options={[
                      { value: 'made-all', label: '전체' },
                      { value: 'made-home', label: '국산' },
                      { value: 'made-foreign', label: '수입' }
                    ]} placeHolder="전체" width={282} height={48} />
                    <em></em>
                    <SelectBox id="model" className="items-sbox" options={select1_list} placeHolder="제조사/모델/등급" width={282} height={48} />
                  </td>
                </tr>
                <tr>
                  <th>판매일</th>
                  <td>
                    <DatePicker defaultValue={now} inputHeight={48} />
                    <em className="mg8">~</em>
                    <DatePicker defaultValue={now} inputHeight={48} />
                    <RadioGroup dataList={[
                      { id: 'month1', value: 1, checked: true, disabled: false, title: '1개월' },
                      { id: 'month3', value: 2, checked: false, disabled: false, title: '3개월' },
                      { id: 'month6', value: 3, checked: false, disabled: false, title: '6개월' },
                      { id: 'month12', value: 4, checked: false, disabled: false, title: '12개월' }
                    ]} />
                    <Button size="big" background="blue80" title="조회" width={130} className="fr" />
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td><p className="tx-exp-tp6">판매완료일 기준 12개월 이내의 차량만 조회 가능합니다.</p></td>
                </tr>
              </tbody>
            </table>
            <ul className="goods-list-ver">
              {listData2.map((v, i) => {
                return (
                  <BannerItem key={v.id} name={v.name} price={v.price} image={v.image} alt={v.alt} isButton={v.isButton} buttonName={v.buttonName} tags={v.tags} infos={v.infos} options={v.options} problems={v.problems} likes={v.likes} bannerType={"vertical"} btnClick={handleBtnClick} btnId={v.id} />
                )
              })}
            </ul>
            <div className="cate-list-btn2">
              <button onClick={handleListMore2}>더보기</button>
            </div>
          </TabCont>
          <TabCont tabTitle="판매점 정보" id="tab1-3" index={2}>
            <div className="map-sec">
              <h4>오토벨모터스</h4>
              <div className="map-wrap">
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51742.6439164819!2d128.57664396195503!3d35.85108173987436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3565e23bd9302901%3A0x1c537395158ac1f0!2z7J247YOA7J207Ja066qo7YSw7IqkIOuMgOq1rOyghOyLnOyepQ!5e0!3m2!1sko!2skr!4v1580285264745!5m2!1sko!2skr" allowFullScreen></iframe>
              </div>
              <table summary="판매자 기본정보에 대한 내용" className="table-tp3">
                <caption className="away">판매자 정보</caption>
                <colgroup>
                  <col width="10%" />
                  <col width="40%" />
                  <col width="10%" />
                  <col width="40%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>주소</th>
                    <td>서울특별시 서초구 신반포로 311</td>
                    <th>전화</th>
                    <td>050-0000-0000</td>
                  </tr>
                  <tr>
                    <th>영업시간</th>
                    <td>
                      월~토요일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)<br />
                      일요일/공휴일 휴무
                    </td>
                    <th>팩스</th>
                    <td>050-0000-0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabCont>
        </TabMenu>
      </div>
    </AppLayout>
  )
}

export default SellerInfo