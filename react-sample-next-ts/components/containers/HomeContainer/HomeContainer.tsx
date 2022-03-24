import React, { memo, useState, FC, useCallback, useEffect } from "react";
import Modal from 'react-modal';
import {
  MainKv,
  MainPreOpen,
  MainMDPick,
} from "../../index";
import { HomeContainerWrap } from "./HomeContainerStyles";

const kvList = {
  data: [
    { 
      img: "/images/thumb/kv_thumb_2.jpg", 
      subTitle: "NEW ARRIVAL",
      title: "Spring Essentials",
      desc: "타임리스 베이직을 추구하는 프론트로우의 첫번째 맨 컬렉션",
    },
    { 
      img: "/images/thumb/kv_thumb_1.jpg", 
      subTitle: "NEW ARRIVAL",
      title: "TIMELESS COLLECTION",
      desc: "타임리스 베이직을 추구하는 프론트로우의 첫번째 맨 컬렉션",
    },
  ],
};

const preOpenList = {
  data: [
    { 
      url: "/issue/19526",
      img: "//image.wconcept.co.kr/images/builder/1/5/171/959/M4_relaysale_300x400_01_20220304183320.jpg", 
      brand: "A;TD",
      title: "뉴런칭 with 기은세",
    },
    { 
      url: "/issue/19512",
      img: "//image.wconcept.co.kr/images/builder/1/5/171/959/M4_relaysale_300x400_03_20220304183401.jpg", 
      brand: "PEPPERPEPPER",
      title: "22SPRING 단독오픈",
    },
    { 
      url: "/issue/19512",
      img: "//image.wconcept.co.kr/images/builder/1/5/171/959/M4_relaysale_300x400_04_20220304183425.jpg", 
      brand: "glen-Waverley 0315",
      title: "22 뉴스프링 로퍼 출시",
    },
    { 
      url: "/issue/19512",
      img: "//image.wconcept.co.kr/images/builder/1/5/171/959/M4_relaysale_300x400_05_20220304183443.jpg", 
      brand: "ASURA",
      title: "22SPRING 선오픈",
    },
    { 
      url: "/issue/19512",
      img: "//image.wconcept.co.kr/images/builder/1/5/171/959/RE RHEE_20220307001308.jpg", 
      brand: "RE RHEE",
      title: "22SS 1차 단독선오픈",
    },
    { 
      url: "/issue/19512",
      img: "//image.wconcept.co.kr/images/builder/1/5/171/959/GUESS _20220307001349.jpg", 
      brand: "GUESS",
      title: "SP 스포티라인 선오픈",
    },
    { 
      url: "/issue/19512",
      img: "//image.wconcept.co.kr/images/builder/1/5/171/959/WEHOURS_20220307001925.jpg", 
      brand: "WEHOURS",
      title: "22SPRING 단독오픈",
    },
  ],
};

const HomeContainer: FC = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <HomeContainerWrap id="home" className="main_women">
      <MainKv data={kvList.data} />
      <MainPreOpen data={preOpenList.data} />
      <div><button onClick={openModal}>Trigger Modal</button></div>
      <MainMDPick />

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        //preventScroll={true}
        contentLabel="Example Modal"
        className="ReactModal__Content"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>start I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodalmodal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal</div>
        <div>I am a modal end</div>
      </Modal>

    </HomeContainerWrap>
  );
};

export default memo(HomeContainer);
