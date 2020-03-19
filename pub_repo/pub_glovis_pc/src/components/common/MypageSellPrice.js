import Input from '@lib/share/items/Input'
import FilterRange from '@lib/share/items/FilterRange'

const MypageSellPrice = () =>{
    return (
        <div className="register-sell-price">
            <h4 className="mb33">판매가격</h4>
            <div className="sell-price-wrap">
              <div className="sell-price">
                <Input type="text" id="register-sell-price" value="3,750" width={238} height={65} />
                <span className="won">만원</span>
              </div>
              <div className="price-grade-tp1">
                <div className="cur-price">
                  <p className="veiw-point-tit">이 차량의 현재 시세<span> (단위:만원)</span></p>
                  <div className="proper-price">
                    <FilterRange rangeUnit="적정시세" initMin={2400} initMax={3800} rangeMin={2750} rangeMax={3400} disabled={true} />
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default MypageSellPrice;