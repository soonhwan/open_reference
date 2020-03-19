import { useState, useEffect, useCallback } from 'react';
import FilterRange from '@lib/share/items/FilterRange';
import Button from '@lib/share/items/Button';

const BuyViewCarPrice = ({dealerInfo=false, buttonType=1}) => {
  // 안심지수
  // const [gradeValue, setGradeValue] = useState(null)
  // const createGrade = useCallback(() => {
  //   let gradeGage = -180;
  //   let gradeText = '';
  //   if(gradeValue === 'A') {
  //     gradeGage = 0;
  //     gradeText = '아주 좋음';
  //   } else if(gradeValue === 'B') {
  //     gradeGage = -45;
  //     gradeText = '좋음';
  //   } else if(gradeValue === 'C') {
  //     gradeGage = -90;
  //     gradeText = '보통';
  //   } else if(gradeValue === 'D') {
  //     gradeGage = -135;
  //     gradeText = '나쁨';
  //   } else if(gradeValue === 'E') {
  //     gradeGage = -180;
  //     gradeText = '아주 나쁨';
  //   }
  //   return (
  //     <>
  //       <div className="grade-range">
  //         <div className="circular-progress">
  //           <div className="track"></div>
  //           <div className="gage" style={{transform:'rotate('+gradeGage+'deg)'}}></div>
  //         </div>
  //       </div>
  //       <span className="circular-edge gray"></span>
  //       <span className="circular-edge blue"></span>
  //       <div className="bar-cover" style={{transform:'rotate('+gradeGage+'deg)'}}>
  //         <span className="bar"></span>
  //       </div>
  //       <span className="grade-num"><strong>{gradeValue}</strong>{gradeText}</span>
  //     </>
  //   )
  // }, []);
  // useEffect(() => setTimeout(() => { setGradeValue('B') }, 300), []);

  return (
    <div className="view-car-point">
      <div className="car-point-info">
        <div className="point-info-price">
          <p className="price-tp1">4,080<span className="won">만원</span></p>
        </div>
        <div className="point-info-set">
          <span>47러0383</span>
          <span>11/16식(17년형)</span>
          <span>53,436km</span>
          <span>오토</span>
          <span>가솔린</span>
        </div>
        <div className="price-grade-tp1">
          <div className="cur-price">
            <p className="veiw-point-tit">이 차량의 현재 시세<span> (단위:만원)</span></p>
            <div className="proper-price">
              <FilterRange rangeUnit="적정시세" initMin={2400} initMax={3800} rangeMin={2750} rangeMax={3400} disabled={true} onChange={value => setDistanceRange(value)} />
            </div>
          </div>
          {/* <div className="car-grade">
            <p className="veiw-point-tit">안심지수</p>
            {createGrade()}
          </div> */}
        </div>
        {
          dealerInfo &&
          <div className="point-info-seller">
            <div className="seller-info-tp3">
              <div className="img-wrap">
                <img src="/images/contents/dealer-basic-img-sml.png" alt="판매자 이미지"/>
                <a href="#" onClick={(e) => openCounselPopup(e, "fade")}></a>
              </div>
              <div className="tx-wrap">
                <p className="veiw-point-tit">최딜러(좋은차상사)</p>
                <span>050-0000-0000</span>
                <ul>
                  <li>판매중 : <strong>16</strong> 건</li>
                  <li>판매완료 : <strong>10</strong> 건</li>
                </ul>
              </div>
            </div>
          </div>          
        }
      </div>
      <div className="car-point-btn">
        {
          buttonType === 1
            ? <Button size="full" background="gray" title="총비용 계산" height={60} />
            : (<ul>
                <li><Button size="full" background="gray" title="총비용 계산" height={60} /></li>
                <li><Button size="full" background="red60" title="온라인 구매하기" height={60} /></li>
              </ul>)
        }
      </div>
    </div>
  )
}

export default BuyViewCarPrice;