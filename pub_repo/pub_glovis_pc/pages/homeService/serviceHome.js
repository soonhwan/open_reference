import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import AppLayout from '@src/components/layouts/AppLayout';
import BannerItem from '@src/components/common/banner/BannerItem';
import CarFilter from '@src/components/common/CarFilter';
import Button from '@lib/share/items/Button';
import SelectBox from '@lib/share/items/SelectBox';
import { car_list2 } from '@src/dummy';
import { SECTION_HOME_SERVICE } from '@src/actions/types';

const ServiceHome = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_HOME_SERVICE });

  // 필터
  const [isChecked1, setIsChecked1] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)
  const [isChecked3, setIsChecked3] = useState(false)
  const [isChecked4, setIsChecked4] = useState(false)
  const [isChecked5, setIsChecked5] = useState(false)
  const [isChecked6, setIsChecked6] = useState(false)
  const [filterCheck1, setFilterCheck1] = useState(false)
  const [filterCheck2, setFilterCheck2] = useState(false)
  const [filterCheck3, setFilterCheck3] = useState(false)
  const [yearRange, setYearRange] = useState({ min: 2011, max: 2015 })
  const [distanceRange, setDistanceRange] = useState({ min: 20000, max: 60000 })
  const [priceRange, setPriceRange] = useState({ min: 2750, max: 3000 })

  const handleCheck1 = useCallback(() => setIsChecked1(!isChecked1), [isChecked1])
  const handleCheck2 = useCallback(() => setIsChecked2(!isChecked2), [isChecked2])
  const handleCheck3 = useCallback(() => setIsChecked3(!isChecked3), [isChecked3])
  const handleCheck4 = useCallback(() => setIsChecked4(!isChecked4), [isChecked4])
  const handleCheck5 = useCallback(() => setIsChecked5(!isChecked5), [isChecked5])
  const handleCheck6 = useCallback(() => setIsChecked6(!isChecked6), [isChecked6])
  const handleChangeFilter1 = useCallback(() => setFilterCheck1(!filterCheck1), [filterCheck1])
  const handleChangeFilter2 = useCallback(() => setFilterCheck2(!filterCheck2), [filterCheck2])
  const handleChangeFilter3 = useCallback(() => setFilterCheck3(!filterCheck3), [filterCheck3])

  const [value1, setValue1] = useState(null)
  const [value2, setValue2] = useState(null)
  const [value3, setValue3] = useState(null)
  const [value4, setValue4] = useState(null)
  const [value5, setValue5] = useState(null)
  const [value6, setValue6] = useState(null)
  const handleSelect1 = useCallback((value) => {
    setValue1(value)
  }, [value1])
  const handleSelect2 = useCallback((value) => {
    setValue2(value)
  }, [value2])
  const handleSelect3 = useCallback((value) => {
    setValue3(value)
  }, [value3])
  const handleSelect4 = useCallback((value) => {
    setValue4(value)
  }, [value4])
  const handleSelect5 = useCallback((value) => {
    setValue5(value)
  }, [value5])
  const handleSelect6 = useCallback((value) => {
    setValue6(value)
  }, [value6])
  // 옵션 더보기
  const [listData, setListData] = useState(car_list2)
  const dummyData = {
    name: "새로 추가된 차 이름",
    price: "3,100",
    image: "/images/dummy/product-img-01.png",
    alt: "차량 이미지",
    discount: 20,
    buttonName: '온라인구매',
    tags: [
      { color: 'blue60', value: 'EW' }
    ],
    infos: ['17/07식', '26,530km', '가솔린', '대구'],
    id: '새로 추가된 데이터 id'
  };
  const handleListMore = (e) => {
    e.preventDefault()
    setListData(listData => [...listData, dummyData, dummyData, dummyData, dummyData, dummyData, dummyData])
  };
  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.`);
  }, []);

  return (
    <AppLayout>
      <div className="service-top-banner">
        <div className="content-wrap">
          <h3>홈서비스</h3>
          <p>집으로 배송 받고 3일간 타보고 결정하는 현대 오토벨의 홈서비스</p>
          <Button size="big" line="white" color="white" title="자세히 보기" marginTop={32} width={140} href="serviceInfo" />
          <ul className="service-ico">
            <li>
              <i className="ico-confirm-white"></i>
              <p className="tit">안심차량</p>
              <p className="exp">현대 오토벨이 인증한 차량</p>
            </li>
            <li>
              <i className="ico-deliver-white"></i>
              <p className="tit">배송 서비스</p>
              <p className="exp">편리하게 우리집까지</p>
            </li>
            <li>
              <i className="ico-refund-white"></i>
              <p className="tit">환불 가능</p>
              <p className="exp">3일 동안 타보고 결정</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="content-wrap home-service-wrap">
        <div className="search-sec">
          <CarFilter title="홈서비스 차량 검색" type="homeService" />
        </div>
        <div className="list-sec">
          <ul className="float-wrap">
            <li><p className="num-tx">총 <span className="ea">1,023</span> 대</p></li>
            <li>
              <SelectBox id="select1" className="items-sbox" isValue={0} options={[
                { value: '1', label: '최근등록일순' },
                { value: '2', label: '주행거리순' },
                { value: '3', label: '높은가격순' },
                { value: '4', label: '낮은가격순' }
              ]} width={148} height={36} />
            </li>
          </ul>
          <ul className="goods-list col3">
            {listData.map((v, i) => {
              if (v.isMarkup === undefined) {
                return (
                  <BannerItem key={i} name={v.name} price={v.price} image={v.image} alt={v.alt} isButton={v.isButton} buttonName={v.buttonName} infos={v.infos} options={v.options} btnClick={handleBtnClick} btnId={v.id} />
                )
              } else {
                if (v.isNumber === 1) {
                  return (
                    <BannerItem key={i} isMarkup={true}>
                      <div className="faq-bn">
                        <i className="ico-qna">Q</i>
                        <p className="tit">현대 오토벨 홈서비스는 전국 어디든지 배송이 가능한가요?</p>
                        <p className="exp">네, 고객님 전국 어디든 배송이 가능합니다.<br />배송비는 거리에 따라 측정되며, 안전하게 배송해드립니다.</p>
                        <p>FAQ 자세히 보기</p>
                      </div>
                    </BannerItem>
                  )
                } else if (v.isNumber === 2) {
                  return (
                    <BannerItem key={i} isMarkup={true}>
                      <div className="review-bn">
                        <div className="img-wrap">
                          <img src="/images/dummy/review-img.png" alt="리뷰 프로필" />
                        </div>
                        <p className="tit">쇼핑몰처럼<br />편리해요!</p>
                        <p className="exp">직장인이라 차량을 보려면 휴가를 내야해서 부담스러웠는데 쇼핑몰처럼 온라인으로 구매하고 배송 받으니 너무 편리했어요.</p>
                      </div>
                    </BannerItem>
                  )
                } else if (v.isNumber === 3) {
                  return (
                    <BannerItem key={i} isMarkup={true}>
                      <div className="autobell-bn">
                        <span><i className="ico-autobell-gray"></i></span>
                        <p className="tit">현대 오토벨<br />홈서비스 차량이란</p>
                        <p className="exp">
                          · 년식 9년 이하<br />
                          · 주행거리 14만 키로 이하<br />
                          · 오토벨에서 인증한 차량
                        </p>
                      </div>
                    </BannerItem>
                  )
                } else if (v.isNumber === 4) {
                  return (
                    <BannerItem key={i} isMarkup={true}>
                      <div className="img-bn">
                        <p>현대 Autobell<br />기획특가전</p>
                        <Link href=""><a>바로가기</a></Link>
                      </div>
                    </BannerItem>
                  )
                }

              }
            })}
          </ul>
          <div className="cate-list-btn2">
            <button onClick={handleListMore}>더보기</button>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default ServiceHome