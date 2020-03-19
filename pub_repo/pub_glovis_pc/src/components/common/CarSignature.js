import Input from '@lib/share/items/Input'
import CheckBox from '@lib/share/items/CheckBox'
import SelectBox from '@lib/share/items/SelectBox'
import { select_day_list, select_month_list, select_year_list } from '@src/dummy'

const CarSignature = () => {
  return (
    <fieldset>              
      <div className="signature">
        <h4>서명</h4>
        <div className="management-law-agree">
          <p>자동차관리법 제 58조 및 같은 법 시행규칙 제 120조에 따라
            ( <CheckBox id='chk-register3' />중고자동차성능 상태를 점검 )하였음을 확인합니다.
          </p>
          <SelectBox id="vin-number2-1" className="items-sbox" options={select_year_list} placeHolder="2019년" width={157} height={40} />
          <SelectBox id="vin-number2-2" className="items-sbox" options={select_month_list} placeHolder="7월" width={157} height={40} />
          <SelectBox id="vin-number2-3" className="items-sbox" options={select_day_list} placeHolder="25일" width={157} height={40} />
        </div>
        <div className="management-law-sign">
          <p>
            중고자동차 성능 <i className="ico-dot mid"></i> 상태 점검자
            <Input type="text" id="calculated23" disabled={true} placeHolder="오토벨자동차정비" width={334} height={40} />(인)
          </p>
          <p>
            중고자동차 성능 <i className="ico-dot mid"></i> 상태 고지자
            <Input type="text" id="calculated24" disabled={true} placeHolder="(주)현대오토"  width={334} height={40} />자동차 매매업소(인)
          </p>
        </div>
      </div>
    </fieldset>
  )
}

export default CarSignature