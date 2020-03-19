import { useDispatch } from 'react-redux';
import ReactPlayer from 'react-player';
import AppLayout from '@src/components/layouts/AppLayout';
import SlideBanner from '@src/components/common/banner/SlideBanner';
import BannerItem from '@src/components/common/banner/BannerItem';
import { car_list } from '@src/dummy';
import { SECTION_MAIN } from '@src/actions/types';

const Main = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MAIN });

  return (
    <AppLayout>
      <div className="content-wrap main-best-sec">
        <h3>TODAY'S <b>BEST PICK</b></h3>
        <div className="best-pick-wrap">
          <ul className="best-pick-01">
            <li>
              <img src="" alt=""/>
              <div className="info">
                <p className="name">기아 셀토스 가솔린 터보 1.6 2WD 노블레스2</p>
                <p className="price-tp5">1,200<span className="won">만원</span></p>
              </div>
            </li>
            <li className="info">
              <p className="name">삼성 QM6 디젤 2.0 2WD RE 시그니처</p>
              <p className="price-tp5">970<span className="won">만원</span></p>
            </li>
            <li><img src="" alt=""/></li>
          </ul>
          <ul className="best-pick-02">
            <li className="info">
              <p className="name">기아 K5 2세대 2.0 가솔린 SX 노블레스</p>
              <p className="price-tp5">720<span className="won">만원</span></p></li>
            <li><img src="" alt=""/></li>
            <li><img src="" alt=""/></li>
            <li className="info">
              <p className="name">현대 그랜저 IG 3.0 익스클루시브 Special</p>
              <p className="price-tp5">850<span className="won">만원</span></p></li>
            <li className="info">
              <p className="name">현대 그랜저 하이브리드 프리미엄</p>
              <p className="price-tp5">1,010<span className="won">만원</span></p></li>
            <li><img src="" alt=""/></li>
          </ul>
        </div>
      </div>
      <div className="content-sec">
        <div className="content-wrap main-popular-sec">
          <h3>카테고리별 <b>인기 매물</b></h3>
          <div className="list-slick">
            <ul className="goods-list">
              <SlideBanner car_list={car_list} touch={true} dots={true} autoplay={true} customArrow={true} hasMarkup={[0]} >
                <BannerItem isMarkup={true}>
                  <div className="main-advertise">
                   <p className="ad-tit">오토벨 LIVE SHOT</p>
                   <p className="ad-exp">오토벨 전문사가<br />직접 진단하고 100% 책임지는<br />신뢰도 높은 차량들입니다</p>
                  </div>
                </BannerItem>
              </SlideBanner>
            </ul>
          </div>
        </div>
      </div>
      <div className="content-wrap main-sell-sec">
        <h3>오토벨에서 <b>내차를 파는 </b><em>3가지 방법</em></h3>
        <p>본인에게 맞는 판매방식을 골라보세요</p>
        <ul className="sell-ico-wrap">
          <li>
            <i className="sell-service-img-01"></i>
            <p className="exp">어렵고 복잡하신가요?<br />간편하게 전문가에게 맡기는</p>
            <p className="tit">방문평가</p>
          </li>
          <li>
            <i className="sell-service-img-02"></i>
            <p className="exp">내차 판매는 내가 직접<br />판매방법도 내가 선택하는</p>
            <p className="tit">셀프등록판매</p>
          </li>
          <li>
            <i className="sell-service-img-03"></i>
            <p className="exp">내 차 상태 자신있는데?<br />평가없이 돈부터 지급받는</p>
            <p className="tit">무평가판매</p>
          </li>
        </ul>
      </div>
      <div className="content-sec">
        <div className="content-wrap main-price-sec">
          <h3>오늘의 인기차량, <b>시세를 확인해보세요</b></h3>
          <ul className="today-price">
            <li className="price-car">
              <p className="price-car-name">현대 LF쏘나타 하이브리드 2.0 GDI 스마트</p>
              <div className="price-car-img">
                <img src="/images/dummy/price-car-img.png" alt="현대 LF쏘나타 하이브리드 2.0 GDI 스마트" />
              </div>
              <ul className="price-car-state">
                <li><p>연식</p>2016<span className="ko">년</span></li>
                <li><p>연료</p>전기+가솔린</li>
                <li><p>신차가</p>3,100<span className="ko">만원</span></li>
                <li><p>주행거리</p>60,000<span className="en">km</span></li>
              </ul>
            </li>
            <li className="price-graph"></li>
          </ul>
        </div>
      </div>
      <div className="content-wrap main-video-sec">
        <div className="video">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url='https://www.glovis.net/upload/main_video01.mp4'
              playing={true}
              loop={true}
              controls={true}
              muted={true}
              width={'100%'}
              height={'100%'}
            />
          </div>
        </div>
      </div>
      <div className="content-sec main-banner-wrap">

      </div>
    </AppLayout>
  )
}

export default Main