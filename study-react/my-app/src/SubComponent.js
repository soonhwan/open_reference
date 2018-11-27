import React, { Component } from 'react';
import Pt from 'prop-types'; //props 타입 설정 관련

class SubComponent extends Component {
  //props : 부모에서 자식으로 전달되는 data, 자식은 부모한테 직접적으로 data 전달이 불가능
  
  //props는 부모가 줘야됨
  //props는 자체적으로 수정이 불가능
  //부모가 수정된걸 줘야 수정이됨

  //자식은 props의 data 기본값과 타입을 설정할 수 있다
  //자식은 props의 data 타입이 string, number 명확히 알고 싶을때
  //자식은 잘못 들어오는 data를 방지하는 목적으로써 타입설정을 하거나
  //자식은 반드시 들어올 data는 필수적으로 부모가 줘야한다고 표기하는 방법도 있다.

  //class 안에서 쓰는 props 문법
  static defaultProps = {
    aaa: '부모가 준게 없다면 이게 기본값',
    aaaInner : '클래스 내부 기본값'
  } 

  //props 타입 설정
  static propTypes = {
    aaa : Pt.string, //string 타입 설정 이기 때문에 number가 들어오면 콘솔오류
    bbb : Pt.number.isRequired, //반드시 필요함 콘솔오류
    ccc : Pt.number //값이 없어도 오류가 나지 않음
  } 
  
  render() {
    //console.log(this.props);

    return (
      <div>
        <h3>SubComponent</h3>
        <p>{this.props.aaa}</p>
        <p>{this.props.bbb}</p>
        <p>{this.props.aaaOut ? this.props.aaaOut : '밖에서 작성한 props 기본값이 없다'}</p>
        <p>{this.props.aaaInner ? this.props.aaaInner : '안에서 작성한 props 기본값이 없다'}</p>
        
        {/* 
          리액트 특성상 자식에게 버튼을 주고서 부모가 data를 관리하다. 
          자식도 자신만의 state를 가질수는 있지만 
          자신만 사용한다면 상관 없음
          누군가 함께 연동을 하는 상황이면 부모한테 알리거나 올려줘서 부모가 관리 해야한다.
        */}
        <p>SubComponent click -> {this.props.a}</p>
        <button type="button" onClick={this.props.plus}>+ 버튼</button> 
        <button type="button" onClick={this.props.minus}>- 버튼</button> 
      </div>
    );
  }
}

//class 밖에서 쓰는 props 문법
/*SubComponent.defaultProps={
  aaaOut : 'SubComponent 기본값'
} */
export default SubComponent; 

