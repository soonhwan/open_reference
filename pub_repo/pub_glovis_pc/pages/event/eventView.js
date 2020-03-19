import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import TabMenu from '@lib/share/tab/TabMenu';
import TabCont from '@lib/share/tab/TabCont';
import {event_detail} from '@src/dummy';
import { SECTION_EVENT } from '@src/actions/types';

const EventView = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_EVENT });
  
  const [ingEvent, setIngEvent] = useState(false);
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
       
        <TabMenu type="type1" defaultTab={1} callBack={tabClick}>
          <TabCont tabTitle="진행중 이벤트" id="tab1-1" index={0}></TabCont>
          <TabCont tabTitle="종료된 이벤트" id="tab1-2" index={1}></TabCont>
          <TabCont tabTitle="포인트 제휴몰" id="tab1-3" index={2}></TabCont>
        </TabMenu>
        <div className="event-view-tit">
          <span className={event_detail.ingEvent?"bul-ing-event":"bul-end-event"}>
            {event_detail.ingEvent?"진행중":"종료"}
          </span>
          <h4 className="tit-area">{event_detail.title}</h4>
          <span className="date-area">{event_detail.startDate} ~ {event_detail.endDate}</span>
        </div>
        
        <div className="event-view-cont">
          <div className="img-area"><img src={event_detail.imgUrl} alt={event_detail.alt} /></div>
          <div className="txt-area">
          {
            event_detail.detailCopy.split('\n').map((line,i) => {
              return (<p key={i}>{line}</p>)
            })
          }
          </div>
        </div>  
        
        <Buttons marginTop={60}>
          <span className="step-btn-l">
            <Button size="big" background="gray" title="이전" width={120} height={48} />
          </span>
          <span className="step-btn-r">
            <Button size="big" background="blue80" title="목록" width={120} height={48} href="/event/eventList" />
          </span>
        </Buttons>
      </div>
    </AppLayout>
  )
}

export default EventView