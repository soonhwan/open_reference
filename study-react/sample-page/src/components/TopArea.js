import React, { Component } from 'react';

class TopArea extends Component {
  state = {
    topList : [
      {
        link:'https://www.priviatravel.com/promotion/sectionEvent/2793/',
        title : '현대카드 PRIVIA 항공 1',
        detail : '좋은 내용이니 이용해보셈 1'
      }, 
      {
        link:'https://www.priviatravel.com/promotion/sectionEvent/2793/',
        title : '현대카드 PRIVIA 항공 2',
        detail : '좋은 내용이니 이용해보셈 2'
      }, 
      {
        link:'https://www.priviatravel.com/promotion/sectionEvent/2793/',
        title : '현대카드 PRIVIA 항공 3',
        detail : '좋은 내용이니 이용해보셈 3'
      }, 
      {
        link:'https://www.priviatravel.com/promotion/sectionEvent/2793/',
        title : '현대카드 PRIVIA 항공 4',
        detail : '좋은 내용이니 이용해보셈 4'
      }, 
      {
        link:'https://www.priviatravel.com/promotion/sectionEvent/2793/',
        title : '현대카드 PRIVIA 항공 5',
        detail : '좋은 내용이니 이용해보셈 5'
      }
    ]
  } 

  render() {
    const { topList } = this.state; 
    const listArea = topList.map((item, index) =>{
      return (
        <li key={index}>
          <a href={item.link} onClick={(e)=>{this.props.hToggle(e)}}><span className="tit">{item.title}</span></a>
          <div className={this.props.trans === 2 ? "tasp-detail on": "tasp-detail"}> 
            <p>{item.detail}</p>
          </div>
        </li>
        )
    });
    return (
      <div className={this.props.trans === 0 ? "w-tas-promotion ly-inner on": "w-tas-promotion ly-inner"}> 
        <h2 className="a11y">섹션별 프로모션 영역</h2> 
        <div className="w-tasp-list"> 
          <ul className="tasp-list">{listArea}</ul> 
        </div> 
        </div>
    );
  };
};

export default TopArea; 