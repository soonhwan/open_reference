import React from 'react';
import { action } from '@storybook/addon-actions';
import { List } from 'components';
import { getMockJs } from '../../storyUtils.js'

export const ListEx = () => {
  const list1 = getMockJs('product', 'list', 10)
  const list2 = getMockJs('product', 'list', 9)
  const list3 = getMockJs('product', 'list', 3)
  // list1.update(1, 'prodNm', '1123123123132').update(1, 'avgScore', 1.1)

  const prevEvent = (eventName, preState, state) => {
    console.log('prevEvent => ', eventName, preState, state)

    if (eventName === 'change_SortingBarSub') {
      if (typeof state === 'object' && state.value === 'opt-2') {
        return false
      } else {
        return true
      }
    }
    return true
    
  }
  // const onEvent = (eventName, state, event) => {
  //   console.log(eventName, params, event)
  //   action('123')
  // }


  return (
    <div>
      <div className="sampleCase">
        <div className="sampleTitle">01. List (기본1열형 : default1Row)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : default1Row(기본1열형) */}
        <List mode="list" itemRenderer="default1Row" infoList={list1} prevEvent={prevEvent} onEvent={action('1. Default1Row')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - listEdit (기본1열형 : default1Row)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : default1Row(기본1열형) */}
        <List mode="listEdit" itemRenderer="default1Row" infoList={list1} prevEvent={prevEvent} onEvent={action('1. Default1Row')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">02. list (랭킹 리스트 : ranking)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : ranking(랭킹 리스트) */}
        <List mode="list" itemRenderer="ranking" infoList={list1} prevEvent={prevEvent} onEvent={action('2. Ranking')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">03. list (검색1열형 : search1Row)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : search1Row(검색1열형) */}
        <List mode="list" itemRenderer="search1Row" infoList={list2} prevEvent={prevEvent} onEvent={action('03. search1Row')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">11. List (에피소드 : episode)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : episode(에피소드) */}
        <List mode="list" itemRenderer="episode" infoList={list1} prevEvent={prevEvent} onEvent={action('11. episode')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">21. list (랭킹 리스트 : rankingOffering)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : rankingOffering(오피링 랭킹 리스트) */}
        <List mode="list" itemRenderer="rankingOffering" infoList={list2} prevEvent={prevEvent} onEvent={action('21. rankingOffering')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">31. List (알림 - 도서 : noticeList)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : noticeList(알림 - 도서) */}
        <List mode="list" itemRenderer="noticeList" infoList={list1} prevEvent={prevEvent} onEvent={action('31. noticeList')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">32. List (알림 - 댓글 : replyList)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : replyList(알림 - 댓글) */}
        <List mode="list" itemRenderer="replyList" infoList={list1} prevEvent={prevEvent} onEvent={action('32. replyList')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">33. List (구매목록 : historyList)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : historyList(구매목록) */}
        <List mode="list" itemRenderer="historyList" infoList={list1} prevEvent={prevEvent} onEvent={action('33. historyList')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - listEdit (구매목록 : historyList)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : historyList(구매목록) */}
        <List mode="listEdit" itemRenderer="historyList" infoList={list1} prevEvent={prevEvent} onEvent={action('33. historyList')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">34. grid (좋아요형 : like)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : like(좋아요형) */}
        <List mode="grid" itemRenderer="like" infoList={list1} prevEvent={prevEvent} onEvent={action('34. Like')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - gridEdit (좋아요형 : like)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : like(좋아요형) */}
        <List mode="gridEdit" itemRenderer="like" infoList={list1} prevEvent={prevEvent} onEvent={action('34. Like')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">35. List (받은선물 : giftReceived)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : giftReceived(받은선물) */}
        <List mode="list" itemRenderer="giftReceived" infoList={list1} prevEvent={prevEvent} onEvent={action('35. giftReceived')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - listEdit (받은선물 : giftReceived)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : giftReceived(받은선물) */}
        <List mode="listEdit" itemRenderer="giftReceived" infoList={list1} prevEvent={prevEvent} onEvent={action('35. giftReceived')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle">36. List (보낸선물 : giftSent)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : giftSent(보낸선물) */}
        <List mode="list" itemRenderer="giftSent" infoList={list1} prevEvent={prevEvent} onEvent={action('36. giftSent')} />
      </div>
      <div className="sampleCase">
        <div className="sampleTitle"> - listEdit (보낸선물 : giftSent)</div>
        {/* mode : list(리스트형) / grid(그리드형) / listEdit(리스트형 Edit) / gridEdit(그리드형 Edit) */}
        {/* itemRenderer : giftSent(보낸선물) */}
        <List mode="listEdit" itemRenderer="giftSent" infoList={list1} prevEvent={prevEvent} onEvent={action('36. giftSent')} />
      </div>

      <style>{`
          body { background:#ffffff; }
          .storybook-container { background:#ffffff !important; }
          .sampleCase { width:100%; min-width:280px;}
          .sampleCase .sampleTitle {
            padding: 5px;
            background: #e6dfd8;
            margin-top: 10px;
          }
          .sampleCase .sampleTitle span { padding:5px 0 0 0; font-size:12px; display:block; }
          .sampleCase .sampleCo {
            padding:0;
            background: #ffffff;
          }
      `}</style>
    </div>
  );
}


export default ListEx