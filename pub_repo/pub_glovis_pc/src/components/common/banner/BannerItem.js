import { useCallback } from 'react';
import PropTypes from 'prop-types';
import SlideGallery from '@src/components/common/banner/SlideGallery';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import ImgCover from '@lib/share/items/ImgCover';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import useCreatePortalInBody from '@lib/share/custom/useCreatePortalInBody';
import { car_gallery } from '@src/dummy';

const BannerItem = ({ name, price, image, alt, buttonName = '', tags = [], infos = [], options = [], isMarkup = false, bannerType = 'horizon', children, auction = false, limitTime, limitNum, btnClick, btnId }) => {
  const [quickPop, setQuickPop, openQuickPop, closeQuickPop] = useRodal(false, true);
  const [rodalShow1, setRodalShow1, rodalPopupHandler1, modalCloseHandler1] = useRodal(false, true);
  const [rodalShow2, setRodalShow2, rodalPopupHandler2, modalCloseHandler2] = useRodal(false, true);
  const createBodyPortal = useCreatePortalInBody();
  const handleOnDragStart = useCallback((e) => {
    e.preventDefault();
  }, []);
  const createOption = useCallback(() => {
    let arr = []
    options.map((v, i) => {
      arr.push(<em key={i} className={`option-tp2 bg-${v.color}`}>{v.value}</em>)
    })
    return arr
  }, []);
  const createTag = useCallback(() => {
    let arr = []
    tags.map((v, i) => {
      arr.push(<em key={i} className={`tag-tp2 tx-${v.color}`}>{v.value}</em>)
    })
    return arr
  }, []);
  const handleBtnClick = useCallback((e) => {
    e.preventDefault();
    if (btnClick !== undefined) btnClick(e, btnId);
  }, []);

  const ImgHover = useCallback(() => {
    return (
      <>
        <div className="img-hover">
          <ul className="scrap-wrap">
            <li className="heart"><a onClick={(e) => rodalPopupHandler1(e, "fade")}><i className="ico-heart"></i><span>관심차량</span></a></li>
            <li className="compare"><a><i className="ico-compare"></i><span>비교하기</span></a></li>
          </ul>
          {bannerType === 'horizon' && <Button size="full" background="blue80" title="QUICK VIEW" onClick={handleQuickPop} />}
        </div>
        {createBodyPortal(
          <>
          <RodalPopup show={quickPop} type={'fade'} closedHandler={closeQuickPop} mode="normal" className="pop-quick-view" size="large" isMask={true}>
            <div className="con-wrap view-wrap">
              <ul className="tit-wrap">
                <li><h3>제네시스 G80 3.3 Premium 럭셔리</h3></li>
                <li className="fr">
                  <p className="price-tp1">3,750<span className="won">만원</span></p>
                </li>
                <li>
                  <div className="tag-wrap">
                    <em className="tag-tp1 tx-blue60">EX</em>
                    <em className="tag-tp1 tx-purple">홈서비스</em>
                    <em className="tag-tp1 tx-sky">수입인증</em>
                  </div>
                </li>
              </ul>
              <div className="car-img-info">
                <div className="img-wrap">
                  <SlideGallery car_gallery={car_gallery} quickView={true} />
                  <ul className="scrap-wrap">
                    <li className="heart"><a><i className="ico-heart"></i><span>관심차량</span></a></li>
                    <li className="compare"><a><i className="ico-compare"></i><span>비교하기</span></a></li>
                  </ul>
                </div>
                <table summary="차량 기본 정보에 대한 내용" className="table-tp1">
                  <caption className="away">차량 기본 정보</caption>
                  <colgroup>
                    <col width="20%" />
                    <col width="30%" />
                    <col width="20%" />
                    <col width="30%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>차량번호</th>
                      <td>47러0383</td>
                      <th>연료</th>
                      <td>가솔린</td>
                    </tr>
                    <tr>
                      <th>연식</th>
                      <td>11/16식(17년형)</td>
                      <th>배기량</th>
                      <td>3,342cc</td>
                    </tr>
                    <tr>
                      <th>주행거리</th>
                      <td>53,436 KM</td>
                      <th>차종</th>
                      <td>대형차</td>
                    </tr>
                    <tr>
                      <th>변속기</th>
                      <td>오토</td>
                      <th>색상</th>
                      <td>회색</td>
                    </tr>
                    <tr>
                      <th>사고유무</th>
                      <td>무사고</td>
                      <th>압료/저당</th>
                      <td>무</td>
                    </tr>
                    <tr>
                      <th>제시번호</th>
                      <td>21363842937</td>
                      <th></th>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Buttons align="center" marginTop={40} className="w-line">
                <Button size="big" background="blue80" title="자세히보기" width={180} height={60} />
                <Button size="big" background="red60" title="온라인구매" width={180} height={60} />
              </Buttons>
            </div>
          </RodalPopup>

          <RodalPopup show={rodalShow1} type={'fade'} closedHandler={modalCloseHandler1} mode="normal" size="xs">
            <div className="con-wrap">
              <p>로그인이 필요한 서비스입니다.<br />로그인 하시겠습니까?</p>
              <Buttons align="center" marginTop={56}>
                <Button size="big" background="gray" title="취소" width={130} />
                <Button size="big" background="blue80" title="확인" width={130} />
              </Buttons>
            </div>
          </RodalPopup>

          <RodalPopup show={rodalShow2} type={'fade'} closedHandler={modalCloseHandler2} mode="normal" size="xs">
            <div className="con-wrap">
              <p>관심차량으로 등록되었습니다.<br />마이페이지에서 확인가능합니다.</p>
              <Buttons align="center" marginTop={56}>
                <Button size="big" background="gray" title="취소" width={130} />
                <Button size="big" background="blue80" title="확인" width={130} />
              </Buttons>
            </div>
          </RodalPopup>
          </>
        )}
      </>
    );
  }, [quickPop]);
  const handleQuickPop = useCallback((e) => {
    openQuickPop(e, "fade");
  }, []);

  if (bannerType === 'horizon') {
    if (auction === false) {
      return (
        <li>
          {
            isMarkup === true
              ? (children)
              : (<span onDragStart={handleOnDragStart}>
                <ImgCover src={image} alt={alt}>
                  <ImgHover />
                </ImgCover>
                {options.length > 0 && <div className="price-opt">{createOption()}</div>}
                <div className="summary">
                  {tags.length > 0 && <span className="list-tag2">{createTag()}</span>}
                  <h5 className="subject">{name}</h5>
                  <div className="info-wrap">
                    <div className="info">{infos.map((v, i) => <span key={i}>{v}</span>)}</div>
                    <div className="price-wrap">
                      <div className="price-left">
                        <p className="price-tp2">{price}<span className="won">원</span></p>
                      </div>
                      <div className="price-right">
                        {buttonName !== '' && <Button size="mid" color="red60" line="red60" radius={true} title={buttonName} width="100" onClick={handleBtnClick} />}
                      </div>
                    </div>
                  </div>
                </div>
              </span>)
          }
        </li>
      )
    } else {
      return (
        <li>
          {
            <span onDragStart={handleOnDragStart}>
              <ImgCover src={image} alt={alt} />
              <div className="summary">
                <div className="info-wrap">
                  <h5 className="subject">{name}</h5>
                  <div className="info">{infos.map((v, i) => <span key={i}>{v}</span>)}</div>
                </div>
                <div className="limit"><span className="time">{limitTime}</span><span className="num">[{limitNum}명 입찰중]</span></div>
                <Button size="big" background={buttonName === "입찰하기" ? "blue80" : "gray"} title={buttonName === "입찰하기" ? "입찰하기" : "입찰가격 수정"} width={176} marginTop={24} onClick={handleBtnClick} />
              </div>
            </span>
          }
        </li>
      )
    }

  } else if (bannerType === 'vertical') {
    return (
      <li>
        <ul className="list-inner">
          <li className="list-img">
            <ImgCover src={image} alt={alt} />
            <ImgHover />
          </li>
          <li className="list-summary">
            <span className="list-tag2">{createTag()}</span>
            <h5>{name}</h5>
            <div className="info">{infos.map((v, i) => <span key={i}>{v}</span>)}</div>
          </li>
          <li className="list-price">
            <p className="price-tp2">{price}<span className="won">만원</span></p>
            <Button size="mid" size="mid" color="red60" line="red60" radius={true} title="온라인구매" width={112} onClick={handleBtnClick} />
          </li>
        </ul>
      </li>
    )
  }
}



BannerItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  buttonName: PropTypes.string,
  tags: PropTypes.array,
  infos: PropTypes.array,
  options: PropTypes.array,
  isMarkup: PropTypes.bool,
  bannerType: PropTypes.string,
  children: PropTypes.node,
  auction: PropTypes.bool,
  btnClick: PropTypes.func,
  btnId: PropTypes.node,
}

export default BannerItem