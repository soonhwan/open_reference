import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import PageNavigator from '@src/components/common/PageNavigator';
import SlideBanner from '@src/components/common/banner/SlideBanner';
import TabMenu from '@lib/share/tab/TabMenu';
import TabCont from '@lib/share/tab/TabCont';
import { event_banner_list as eventBannerList, event_list as eventList } from '@src/dummy';
import { SECTION_EVENT } from '@src/actions/types';

const EventList = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_EVENT });

  const [ingEvent, setIngEvent] = useState(true);
  const tabClick = (e,idx) => {
    if(idx === 0){
      setIngEvent(true);
    }
    else{
      setIngEvent(false);
    }
  }

  return (
    <AppLayout>
      <div className="content-wrap event-contents">
        <h3>이벤트</h3>
       
        <TabMenu type="type1" callBack={tabClick}>
          <TabCont tabTitle="진행중 이벤트" id="tab1-1" index={0}></TabCont>
          <TabCont tabTitle="종료된 이벤트" id="tab1-2" index={1}></TabCont>
          <TabCont tabTitle="포인트 제휴몰" id="tab1-3" index={2}></TabCont>
        </TabMenu>
        {ingEvent &&
        <>
          <SlideBanner car_list={eventBannerList} touch={true} dots={true} autoplay={true} slideType="banner-single">
            {
              //상단 이벤트 배너
              eventBannerList.map((v, i) => {
                return (
                  <div key={v.id} className="event-banner-item">
                    <a href={v.href}><img src={v.imgUrl} alt={v.alt}/></a>
                  </div>
                )
              })
            }
          </SlideBanner>
          <p className="event-msg">오토벨이 준비한 다양한 이벤트를 통해 특별한 혜택을 만나보세요!</p>
        </>
        }
        
        <div className="event-list">
          <ul>
            {
              //이벤트 리스트
              eventList.map((v, i) => {
                return (
                  <li key={v.id}>
                    <a href={v.href}>
                      <div className="img-area">
                        <span className={v.ingEvent?"bul-ing-event":"bul-end-event"}>
                          {v.ingEvent?"진행중":"종료"}
                        </span>
                        <img src={v.imgUrl} alt={v.alt} />
                      </div>
                      <p className="date-area">{v.startDate} ~ {v.endDate}</p>
                      <p className="tit-area">{v.title}</p>
                    </a>
                  </li>
                )
              })
            }
            
          </ul>
        </div>
        <PageNavigator recordCount={50} className="mt32" />
      </div>
    </AppLayout>
  )
}

export default EventList