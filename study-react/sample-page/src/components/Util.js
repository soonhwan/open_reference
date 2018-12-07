import React, { Component } from 'react';

class Util extends Component {
  render() {
    return (
      <div className="w-header-util">
        <div className="hu-control"> 
          <span className="txt">주요 프로모션 및 안내 보기</span> 
          <span className="b-crt bc-close"><a href="#" onClick={(e)=>{this.props.hToggleClose(e)}}><span className="txt">닫기</span></a></span> 
          <span className="b-crt bc-open"><a href="#" onClick={(e)=>{this.props.hToggleOpen(e)}}><span className="txt">열기</span></a></span> 
        </div>
        <div>공지사항롤링</div>
        <div>로그인 | 마이페이지 | 기타등등</div>
      </div>
    );
  };
};

export default Util; 