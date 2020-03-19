import Input from '@lib/share/items/Input';
import SelectBox from '@lib/share/items/SelectBox';
import CheckBox from '@lib/share/items/CheckBox';
import RadioGroup from '@lib/share/items/RadioGroup';
import { select1_list, color } from '@src/dummy';

const CarStatus = () => {
  return (
    <fieldset>
      <legend className="away">차량 종합상태</legend>
      <table summary="차량 종합상태에 대한 내용" className="table-tp1 input fs14 th-c">
        <caption>차량 종합상태</caption>
        <colgroup>
          <col width="14%" />
          <col width="24%" />
          <col width="32%" />
          <col width="17%" />
          <col width="13%" />
        </colgroup>
        <thead>
          <tr>
            <th>사용이력</th>
            <th>상태</th>
            <th>항목/해당부품</th>
            <th>가격조사 산정액</th>
            <th>특기사항</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>주행거리 계기상태</th>
            <td>
              <RadioGroup dataList={[
                {id:'state1', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state2', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td></td>
            <td>
              <Input type="text" id="calculated1" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note2" width='100%' height={40} /></td>
          </tr>
          <tr>
            <th>주행거리 상태</th>
            <td>
              <RadioGroup dataList={[
                {id:'state3', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state4', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td>
              <em className="mr8">현재 주행거리</em>
              <Input type="text" id="note3" width={122} height={40} />
              <em>km</em>
            </td>
            <td>
              <Input type="text" id="calculated2" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note4" width='100%' height={40} /></td>
          </tr>
          <tr>
            <th>차대번호 표기</th>
            <td><SelectBox id="vin-number2" className="items-sbox" options={select1_list} placeHolder="양호" width={160} height={40} /></td>
            <td></td>
            <td>
              <Input type="text" id="calculated3" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note5" width='100%' height={40} /></td>
          </tr>
          <tr>
            <th>배출가스</th>
            <td className="chk-y-wrap">
              <CheckBox id='chk-gas-co1' title='일산화탄소' />
              <CheckBox id='chk-gas-hc1' title='탄화수소' />
            </td>
            <td>
              <span className="bridge2 gas">
                <span>일산화탄소(CO)</span>
                <Input type="text" id="gas-co2" width={122} height={40} />
                <em>%</em>
              </span>
              <span className="bridge2 gas">
                <span>탄화수소(HC)</span>
                <Input type="text" id="gas-hc2" width={122} height={40} />
                <em>ppm</em>
              </span>
            </td>
            <td>
              <Input type="text" id="calculated4" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note6" width='100%' height={40} /></td>
          </tr>
          <tr>
            <th rowSpan="2">튜닝</th>
            <td rowSpan="2">
              <RadioGroup dataList={[
                {id:'none1', value:1, checked:true, disabled:false, title:'없음'},
                {id:'exist1', value:2, checked:false, disabled:false, title:'있음'}
              ]} />
            </td>
            <td className="chk-w-wrap">
              <CheckBox id='chk-legality' title='적법' />
              <CheckBox id='chk-illegality' title='불법' />
            </td>
            <td rowSpan="2">
              <Input type="text" id="calculated5" width={92} height={40} />
              <em>만원</em>
            </td>
            <td rowSpan="2"><Input type="text" id="note7" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td className="chk-w-wrap">
              <CheckBox id='chk-structure' title='구조' />
              <CheckBox id='chk-device' title='장치' />
            </td>
          </tr>
          <tr>
            <th>특별이력</th>
            <td>
              <RadioGroup dataList={[
                {id:'none2', value:1, checked:true, disabled:false, title:'없음'},
                {id:'exist2', value:2, checked:false, disabled:false, title:'있음'}
              ]} />
            </td>
            <td className="chk-w-wrap">
              <CheckBox id='chk-waterlogging' title='침수' />
              <CheckBox id='chk-fire' title='화재' />
            </td>
            <td>
              <Input type="text" id="calculated6" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note8" width='100%' height={40} /></td>
          </tr>
          <tr>
            <th>용도변경</th>
            <td>
              <RadioGroup dataList={[
                {id:'none3', value:1, checked:true, disabled:false, title:'없음'},
                {id:'exist3', value:2, checked:false, disabled:false, title:'있음'}
              ]} />
            </td>
            <td className="chk-w-wrap">
              <CheckBox id='chk-rent' title='렌트' />
              <CheckBox id='chk-lease' title='리스' />
              <CheckBox id='chk-business' title='영업용' />
            </td>
            <td>
              <Input type="text" id="calculated7" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note9" width='100%' height={40} /></td>
          </tr>
                  <tr>
                    <th>색상</th>
                    <td><RadioGroup dataList={color} /></td>
                    <td className="chk-w-wrap">
                      <CheckBox id='chk-all-painting' title='전체도색' />
                      <CheckBox id='chk-painting' title='색상변경' />
                    </td>
                    <td>
                      <Input type="text" id="calculated8" width={92} height={40} />
                      <em>만원</em>
                    </td>
                    <td><Input type="text" id="note10" width='100%' height={40} /></td>
                  </tr>
                  <tr>
                    <th>주요옵션</th>
                    <td>
                      <RadioGroup dataList={[
                        {id:'none4', value:1, checked:true, disabled:false, title:'없음'},
                        {id:'exist4', value:2, checked:false, disabled:false, title:'있음'}
                      ]} />
                    </td>
                    <td className="chk-w-wrap">
                      <CheckBox id='chk-option-other' title='기타' />
                      <CheckBox id='chk-option-sunroof' title='선루프' />
                      <CheckBox id='chk-option-nav' title='네비게이션' />
                    </td>
                    <td>
                      <Input type="text" id="calculated9" width={92} height={40} />
                      <em>만원</em>
                    </td>
                    <td><Input type="text" id="note11" width='100%' height={40} /></td>
                  </tr>
                </tbody>
              </table>
            </fieldset>
  )
}

export default CarStatus;