import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import CarFilter from '@src/components/common/CarFilter';
import BannerItem from '@src/components/common/banner/BannerItem';
import Button from '@lib/share/items/Button';
import { SECTION_BUY } from '@src/actions/types';
import { car_list } from '@src/dummy';

const LiveList = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_BUY });

  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.`);
  }, []);

  return (
    <AppLayout>
      <div className="list-nav-sec">
        <ul className="content-wrap">
          <li><a href="list" tilte="전체차량 리스트 보기"><i className="ico-allcar"></i><span>전체차량</span></a></li>
          <li className="on"><a href="liveList" title="라이브스튜디오 리스트 보기"><i className="ico-livestudio"></i><span>라이브스튜디오</span></a></li>
          <li><a href="auctionList" title="경매낙찰차량 리스트 보기"><i className="ico-bid"></i><span>경매낙찰차량</span></a></li>
          <li><a href="certifyMall" title="인증몰 리스트 보기"><i className="ico-income"></i><span>인증몰</span></a></li>
        </ul>
      </div>
      <div className="content-wrap buy-wrap">
        <div className="search-sec">
          <CarFilter />
        </div>
        <div className="list-sec">
          <div className="list-banner live">
            <p className="tit">오토벨 <span className="tx-red60">라이브 스튜디오</span>는?</p>
            <p className="exp">
              사고 유무 확인부터 성능까지!<br />
              차의 모든 것을 진단하여 알려드립니다!<br />
              차량 정보에서 <em className="option-tp2 bg-red">라이브</em> 뱃지를 확인하세요!
            </p>
            <Button size="mid" line="gray" color="black" radius={true} title="오토벨 라이브 스튜디오 차량이란?" marginTop={20} width={244} href="liveStudio" />
          </div>
          <div className="list-wrap">
            <ul className="goods-list col3">
              {car_list.map((v, i) => {
                if (i < 12) {
                  return (
                    <BannerItem key={v.id} name={v.name} price={v.price} image={v.image} alt={v.alt} isButton={v.isButton} buttonName={v.buttonName} tags={v.tags} infos={v.infos} options={v.options} btnClick={handleBtnClick} btnId={v.id} />
                  )
                }
              })}
            </ul>
          </div>
        </div>
      </div>

    </AppLayout>
  )
}

export default LiveList
