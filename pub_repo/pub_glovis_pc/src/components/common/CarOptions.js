import { useState, useEffect, useCallback } from 'react'
import Tooltip from '@lib/share/items/Tooltip'
import TooltipItem from '@lib/share/items/TooltipItem'
import TooltipCont from '@lib/share/items/TooltipCont'
import Button from '@lib/share/items/Button'
import CheckBox from '@lib/share/items/CheckBox'
import CheckBoxItem from '@lib/share/items/CheckBoxItem'
import { CSSTransition } from 'react-transition-group'

const CarOptions = ({title, mode="view", more=true, type=1, popup=false, isButton=false, className=''}) => {
  const [carOptionMore, setCarOptionMore] = useState(false)
  const handleCarOption = useCallback((e) => {
    e.preventDefault()
    setCarOptionMore(!carOptionMore)
  }, [carOptionMore]);
  const divClass = popup === false ? `option-cate ${className}` : className;
  const createMoreButton = () => {
    return (
      <div className={carOptionMore ? `cate-list-btn${type === 1 ? null : type} active` : `cate-list-btn${type === 1 ? null : type}`}>
        <button onClick={handleCarOption}>{carOptionMore ? "추가옵션 닫기" : "추가옵션 더보기"}</button>
      </div>
    );
  };

  return (
    <div className={divClass}>
      {title !== undefined && <h4 className="mb33">{title}</h4>}
      {isButton === true && <Button size="mid" line="gray" radius={true} title="+ 전체 옵션보기" width={139} />}
      <div className={mode === "view" ? `car-option-tp${type}` : `car-option-tp${type} chk`}>
      {
        mode === "view"
        ?
        <ul className="cate-ico">
          <li className="on">
            <Tooltip placement="bottomLeft" width={560} zid={101}>
              <TooltipItem>
                <i className="ico-sunroof"></i>
                <span>선루프</span>
              </TooltipItem>
              <TooltipCont>
                <div className="cate-list-tooltip">
                  <img src="/images/contents/car-option-img-01.png" alt="선루프"></img>
                  <p>
                    선루프
                    <span>
                    내비게이션은 GPS(인공위성을 통한 
                    위치확인시스템)를 이용하여 운전자가 
                    낯선 목적지에 실시간 교통상황을 고려
                    하여 계산된 최적경로를 따라 목적지
                    까지 길을 안내하는 기능을 가진 장치 
                    입니다.
                    </span>
                  </p>
                </div>
              </TooltipCont>
            </Tooltip>
          </li>
          <li className="on">
            <Tooltip placement="bottomLeft" width={560} zid={101}>
              <TooltipItem>
                <i className="ico-led"></i>
                <span>LED</span>
              </TooltipItem>
              <TooltipCont>
                <div className="cate-list-tooltip">
                  <img src="/images/contents/car-option-img-01.png" alt="LED"></img>
                  <p>
                    LED
                    <span>
                    내비게이션은 GPS(인공위성을 통한 
                    위치확인시스템)를 이용하여 운전자가 
                    낯선 목적지에 실시간 교통상황을 고려
                    하여 계산된 최적경로를 따라 목적지
                    까지 길을 안내하는 기능을 가진 장치 
                    입니다.
                    </span>
                  </p>
                </div>
              </TooltipCont>
            </Tooltip>
          </li>
          <li className="on">
            <Tooltip placement="bottomLeft" width={560} zid={101}>
              <TooltipItem>
                <i className="ico-hipass"></i>
                <span>하이패스</span>
              </TooltipItem>
              <TooltipCont>
                <div className="cate-list-tooltip">
                  <img src="/images/contents/car-option-img-01.png" alt="하이패스"></img>
                  <p>
                    하이패스
                    <span>
                    내비게이션은 GPS(인공위성을 통한 
                    위치확인시스템)를 이용하여 운전자가 
                    낯선 목적지에 실시간 교통상황을 고려
                    하여 계산된 최적경로를 따라 목적지
                    까지 길을 안내하는 기능을 가진 장치 
                    입니다.
                    </span>
                  </p>
                </div>
              </TooltipCont>
            </Tooltip>
          </li>
          <li className="on">
            <Tooltip placement="bottomLeft" width={560} zid={101}>
              <TooltipItem>
                <i className="ico-ventilation-seat"></i>
                <span>통풍시트<em>(운전석)</em></span>
              </TooltipItem>
              <TooltipCont>
                <div className="cate-list-tooltip">
                  <img src="/images/contents/car-option-img-01.png" alt="통풍시트(운전석)"></img>
                  <p>
                    통풍시트(운전석)
                    <span>
                    내비게이션은 GPS(인공위성을 통한 
                    위치확인시스템)를 이용하여 운전자가 
                    낯선 목적지에 실시간 교통상황을 고려
                    하여 계산된 최적경로를 따라 목적지
                    까지 길을 안내하는 기능을 가진 장치 
                    입니다.
                    </span>
                  </p>
                </div>
              </TooltipCont>
            </Tooltip>
          </li>
          <li className="on">
            <Tooltip placement="bottomLeft" width={560} zid={101}>
              <TooltipItem>
                <i className="ico-back-camera"></i>
                <span>후측방경보<em>(BSD)</em></span>
              </TooltipItem>
              <TooltipCont>
                <div className="cate-list-tooltip">
                  <img src="/images/contents/car-option-img-01.png" alt="후측방경보(BSD)"></img>
                  <p>
                    후측방경보(BSD)
                    <span>
                    내비게이션은 GPS(인공위성을 통한 
                    위치확인시스템)를 이용하여 운전자가 
                    낯선 목적지에 실시간 교통상황을 고려
                    하여 계산된 최적경로를 따라 목적지
                    까지 길을 안내하는 기능을 가진 장치 
                    입니다.
                    </span>
                  </p>
                </div>
              </TooltipCont>
            </Tooltip>
          </li>
          <li className="on">
            <Tooltip placement="bottomRight" width={560} zid={101}>
              <TooltipItem>
                <i className="ico-around-view"></i>
                <span>어라운드뷰<em>(AVIM)</em></span>
              </TooltipItem>
              <TooltipCont>
                <div className="cate-list-tooltip">
                  <img src="/images/contents/car-option-img-01.png" alt="어라운드뷰(AVIM)"></img>
                  <p>
                    어라운드뷰(AVIM)
                    <span>
                    내비게이션은 GPS(인공위성을 통한 
                    위치확인시스템)를 이용하여 운전자가 
                    낯선 목적지에 실시간 교통상황을 고려
                    하여 계산된 최적경로를 따라 목적지
                    까지 길을 안내하는 기능을 가진 장치 
                    입니다.
                    </span>
                  </p>
                </div>
              </TooltipCont>
            </Tooltip>
          </li>
          <li className="on">
            <Tooltip placement="bottomRight" width={560} zid={101}>
              <TooltipItem>
                <i className="ico-hud"></i>
                <span>HUD</span>
              </TooltipItem>
              <TooltipCont>
                <div className="cate-list-tooltip">
                  <img src="/images/contents/car-option-img-01.png" alt="HUD"></img>
                  <p>
                    HUD
                    <span>
                    내비게이션은 GPS(인공위성을 통한 
                    위치확인시스템)를 이용하여 운전자가 
                    낯선 목적지에 실시간 교통상황을 고려
                    하여 계산된 최적경로를 따라 목적지
                    까지 길을 안내하는 기능을 가진 장치 
                    입니다.
                    </span>
                  </p>
                </div>
              </TooltipCont>
            </Tooltip>
          </li>
          <li className="on">
            <Tooltip placement="bottomRight" width={560} zid={101}>
              <TooltipItem>
                <i className="ico-smart-key"></i>
                <span>스마트키</span>
              </TooltipItem>
              <TooltipCont>
                <div className="cate-list-tooltip">
                  <img src="/images/contents/car-option-img-01.png" alt="스마트키"></img>
                  <p>
                    스마트키
                    <span>
                    내비게이션은 GPS(인공위성을 통한 
                    위치확인시스템)를 이용하여 운전자가 
                    낯선 목적지에 실시간 교통상황을 고려
                    하여 계산된 최적경로를 따라 목적지
                    까지 길을 안내하는 기능을 가진 장치 
                    입니다.
                    </span>
                  </p>
                </div>
              </TooltipCont>
            </Tooltip>
          </li>
          <li className="on">
            <Tooltip placement="bottomRight" width={560} zid={101}>
              <TooltipItem>
                <i className="ico-smartcruze"></i>
                <span>크루즈컨트롤</span>
              </TooltipItem>
              <TooltipCont>
                <div className="cate-list-tooltip">
                  <img src="/images/contents/car-option-img-01.png" alt="크루즈컨트롤"></img>
                  <p>
                    크루즈컨트롤
                    <span>
                    내비게이션은 GPS(인공위성을 통한 
                    위치확인시스템)를 이용하여 운전자가 
                    낯선 목적지에 실시간 교통상황을 고려
                    하여 계산된 최적경로를 따라 목적지
                    까지 길을 안내하는 기능을 가진 장치 
                    입니다.
                    </span>
                  </p>
                </div>
              </TooltipCont>
            </Tooltip>
          </li>
          <li className="on">
            <Tooltip placement="bottomRight" width={560} zid={101}>
              <TooltipItem>
                <i className="ico-navigation"></i>
                <span>네비게이션</span>
              </TooltipItem>
              <TooltipCont>
                <div className="cate-list-tooltip">
                  <img src="/images/contents/car-option-img-01.png" alt="네비게이션"></img>
                  <p>
                    네비게이션
                    <span>
                    내비게이션은 GPS(인공위성을 통한 
                    위치확인시스템)를 이용하여 운전자가 
                    낯선 목적지에 실시간 교통상황을 고려
                    하여 계산된 최적경로를 따라 목적지
                    까지 길을 안내하는 기능을 가진 장치 
                    입니다.
                    </span>
                  </p>
                </div>
              </TooltipCont>
            </Tooltip>
          </li>
        </ul>
        :
        <ul className="cate-ico">
          <CheckBoxItem id="chk-sunroof" checked={true} size="small">
            <i className="ico-sunroof"></i>
            <span className="ico-exp">썬루프</span>
          </CheckBoxItem>
          <CheckBoxItem id="chk-led" checked={false} size="small">
            <i className="ico-led"></i>
            <span className="ico-exp">LED</span>
          </CheckBoxItem>
          <CheckBoxItem id="chk-hipass" checked={false} size="small">
            <i className="ico-hipass"></i>
            <span className="ico-exp">하이패스</span>
          </CheckBoxItem>
          <CheckBoxItem id="chk-ventilation-seat" checked={false} size="small">
            <i className="ico-ventilation-seat"></i>
            <span className="ico-exp">통풍시트<em>(운전석)</em></span>
          </CheckBoxItem>
          <CheckBoxItem id="chk-back-camera" checked={false} size="small">
            <i className="ico-back-camera"></i>
            <span className="ico-exp">후측방경보<em>(BSD)</em></span>
          </CheckBoxItem>
          <CheckBoxItem id="chk-around-view" checked={false} size="small">
            <i className="ico-around-view"></i>
            <span className="ico-exp">어라운드뷰<em>(AVIM)</em></span>
          </CheckBoxItem>
          <CheckBoxItem id="chk-hud" checked={false} size="small">
            <i className="ico-hud"></i>
            <span className="ico-exp">HUD</span>
          </CheckBoxItem>
          <CheckBoxItem id="chk-smart-key" checked={false} size="small">
            <i className="ico-smart-key"></i>
            <span className="ico-exp">스마트키</span>
          </CheckBoxItem>
          <CheckBoxItem id="chk-smartcruze" checked={false} size="small">
            <i className="ico-smartcruze"></i>
            <span className="ico-exp">크루즈컨트롤</span>
          </CheckBoxItem>
          <CheckBoxItem id="chk-navigation" checked={false} size="small">
            <i className="ico-navigation"></i>
            <span className="ico-exp">네비게이션</span>
          </CheckBoxItem>
        </ul>
      }
      {popup !== false && createMoreButton()}
      {more === true && 
        <>
          <CSSTransition 
            in={carOptionMore}
            timeout={300}
            classNames={'fade'}
            unmountOnExit
          >
            {
              mode === "view" && popup === false
                ?
                  <div className="cate-list-wrap">
                    <p>추가옵션</p>
                    <ul className="cate-list">
                      <li>
                        <p>외장</p>
                        <ul className="cate-list-detail">
                          <li className="on">
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>루프팩</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="루프팩"></img>
                                  <p>
                                    루프팩
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>사이드미러:전동접이</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="사이드미러:전동접이"></img>
                                  <p>
                                    사이드미러:전동접이
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li className="on">
                            <Tooltip placement="bottomLeftLeft" width={560}>
                              <TooltipItem>
                                <span>썬루프</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="썬루프"></img>
                                  <p>
                                    썬루프
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>파노라마썬루프</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="파노라마썬루프"></img>
                                  <p>
                                    파노라마썬루프
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>알루미늄휠</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="알루미늄휠"></img>
                                  <p>
                                    알루미늄휠
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>HD</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="HD"></img>
                                  <p>
                                    HD
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>내장</p>
                        <ul className="cate-list-detail">
                          <li className="on">
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>전자식룸미러(ECM)</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="전자식룸미러(ECM)"></img>
                                  <p>
                                    전자식룸미러(ECM)
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>가죽시트</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="가죽시트"></img>
                                  <p>
                                    가죽시트
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>전동시트(운전석)</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="전동시트(운전석)"></img>
                                  <p>
                                    전동시트(운전석)
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>전동시트(뒷잣석)</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="전동시트(뒷잣석)"></img>
                                  <p>
                                    전동시트(뒷잣석)
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>열선시트(앞)</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="열선시트(앞)"></img>
                                  <p>
                                    열선시트(앞)
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>열선시트(뒤)</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="열선시트(뒤)"></img>
                                  <p>
                                    열선시트(뒤)
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>메모리시트(운전석)</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="메모리시트(운전석)"></img>
                                  <p>
                                    메모리시트(운전석)
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>메모리시트(동승석)</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="메모리시트(동승석)"></img>
                                  <p>
                                    메모리시트(동승석)
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>통풍시트(동승석)</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="통풍시트(동승석)"></img>
                                  <p>
                                    통풍시트(동승석)
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>스티어링:열선내장</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="스티어링:열선내장"></img>
                                  <p>
                                    스티어링:열선내장
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>안전</p>
                        <ul className="cate-list-detail">
                          <li className="on">
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>에어백:동승석</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="에어백:동승석"></img>
                                  <p>
                                    에어백:동승석
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>에어백:운전석</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="에어백:운전석"></img>
                                  <p>
                                    에어백:운전석
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>에어백:사이드</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="에어백:사이드"></img>
                                  <p>
                                    에어백:사이드
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>에어백:커튼</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="에어백:커튼"></img>
                                  <p>
                                    에어백:커튼
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>구동력제어장치(TCS)</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="구동력제어장치(TCS)"></img>
                                  <p>
                                    구동력제어장치(TCS) 
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>미끄럼방지장치(ABS)</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="미끄럼방지장치(ABS)"></img>
                                  <p>
                                    미끄럼방지장치(ABS)
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>차선이탈경보(LDWS)</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="차선이탈경보(LDWS)"></img>
                                  <p>
                                    차선이탈경보(LDWS)
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>후방감지센서</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="후방감지센서"></img>
                                  <p>
                                    후방감지센서
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>후방카메라</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="후방카메라"></img>
                                  <p>
                                    후방카메라
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>타이어공기압경고(TPMS)</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="타이어공기압경고(TPMS)"></img>
                                  <p>
                                    타이어공기압경고(TPMS)
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>편의</p>
                        <ul className="cate-list-detail">
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>오토에어컨</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="오토에어컨"></img>
                                  <p>
                                    오토에어컨
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>공기청정기</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="공기청정기"></img>
                                  <p>
                                    공기청정기
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>버튼시동</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="버튼시동"></img>
                                  <p>
                                    버튼시동
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li className="on">
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>스티어링휠리모컨</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="스티어링휠리모컨"></img>
                                  <p>
                                    스티어링휠리모컨
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li className="on">
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>자동주차보조시스템(ASPAS)</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="자동주차보조시스템(ASPAS)"></img>
                                  <p>
                                    자동주차보조시스템(ASPAS)
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>블루투스</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="블루투스"></img>
                                  <p>
                                    블루투스
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>AUX</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="AUX"></img>
                                  <p>
                                    AUX
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                          <li>
                            <Tooltip placement="bottomLeftLeft" width={560} exception="car-option">
                              <TooltipItem>
                                <span>USB</span>
                              </TooltipItem>
                              <TooltipCont>
                                <div className="cate-list-tooltip">
                                  <img src="/images/contents/car-option-img-01.png" alt="USB"></img>
                                  <p>
                                    USB
                                    <span>
                                      스마트키를 몸에 지니는 것만으로도<br />
                                      도어 잠금장치를 해제할 수 있거나 버튼을 눌러<br />
                                      시동을 껄 수 있는 편의 장치입니다.
                                    </span>
                                  </p>
                                </div>
                              </TooltipCont>
                            </Tooltip>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <p>선택옵션</p>
                  </div>
                :
                  <div className="cate-list-wrap">
                    <p>추가옵션</p>
                    <ul className="cate-list">
                      <li>
                        <p>외장</p>
                        <ul className="cate-list-detail">
                          <li className="on">
                            <CheckBox id='chk-loof-pack' title='루프팩' />
                          </li>
                          <li>
                            <CheckBox id='chk-auto-mirror' title='사이드미러:전동접이' />
                          </li>
                          <li>
                            <CheckBox id='chk-sunroof-2' title='썬루프' />
                          </li>
                          <li>
                            <CheckBox id='chk-panorama-sunroof' title='파노라마썬루프' />
                          </li>
                          <li>
                          <CheckBox id='chk-al-wheel' title='알루미늄휠' />
                          </li>
                          <li>
                            <CheckBox id='chk-hd' title='HD' />
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>내장</p>
                        <ul className="cate-list-detail">
                          <li className="on">
                            <CheckBox id='chk-ecm' title='전자식룸미러(ECM)' />
                          </li>
                          <li>
                            <CheckBox id='chk-leathersheet' title='가죽시트' />
                          </li>
                          <li>
                            <CheckBox id='chk-autosheet-p' title='전동시트(운전석)' />
                          </li>
                          <li>
                            <CheckBox id='chk-autosheet-b' title='전동시트(뒷자석)' />
                          </li>
                          <li>
                            <CheckBox id='chk-heatsheet-f' title='열선시트(앞)' />
                          </li>
                          <li>
                            <CheckBox id='chk-heatsheet-b' title='열선시트(뒤)' />
                          </li>
                          <li>
                            <CheckBox id='chk-memorysheet-p' title='메모리시트(운전석)' />
                          </li>
                          <li>
                            <CheckBox id='chk-memorysheet-d' title='메모리시트(동승석)' />
                          </li>
                          <li>
                            <CheckBox id='chk-ventilation-d' title='통풍시트(동승석)' />
                          </li>
                          <li>
                            <CheckBox id='chk-steering-heat' title='스티어링:열선내장' />
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>안전</p>
                        <ul className="cate-list-detail">
                          <li className="on">
                            <CheckBox id='chk-airback-d' title='에어백:동승석' />
                          </li>
                          <li>
                            <CheckBox id='chk-airback-p' title='에어백:운전석' />
                          </li>
                          <li>
                            <CheckBox id='chk-airback-s' title='에어백:사이드' />
                          </li>
                          <li>
                            <CheckBox id='chk-airback-c' title='에어백:커튼' />
                          </li>
                          <li>
                            <CheckBox id='chk-tcs' title='구동력제어장치(TCS)' />
                          </li>
                          <li>
                            <CheckBox id='chk-abs' title='미끄럼방지장치(ABS)' />
                          </li>
                          <li>
                            <CheckBox id='chk-ldws' title='차선이탈경보(LDWS)' />
                          </li>
                          <li>
                            <CheckBox id='chk-back-sensor' title='후방감지센서' />
                          </li>
                          <li>
                            <CheckBox id='chk-back-camera' title='후방카메라' />
                          </li>
                          <li>
                            <CheckBox id='chk-tpms' title='타이어공기압경고(TPMS)' />
                          </li>
                        </ul>
                      </li>
                      <li>
                      <p>편의</p>
                        <ul className="cate-list-detail">
                          <li className="on">
                            <CheckBox id='chk-auto-conditioner' title='오토에어컨' />
                          </li>
                          <li>
                            <CheckBox id='chk-air-cleaner' title='공기청정기' />
                          </li>
                          <li>
                            <CheckBox id='chk-button' title='버튼시동' />
                          </li>
                          <li>
                            <CheckBox id='chk-wheel-remote' title='스티어링휠리모컨' />
                          </li>
                          <li>
                            <CheckBox id='chk-aspas' title='자동주차보조시스템(ASPAS)' />
                          </li>
                          <li>
                            <CheckBox id='chk-bluetooth' title='블루투스' />
                          </li>
                          <li>
                            <CheckBox id='chk-aux' title='AUX' />
                          </li>
                          <li>
                            <CheckBox id='chk-usb' title='USB' />
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <p>선택옵션</p>
                  </div>
            }
            
          </CSSTransition>              
          {popup === false && createMoreButton()}
        </>
      }
      </div>
    </div>
  )
  
}

export default CarOptions;