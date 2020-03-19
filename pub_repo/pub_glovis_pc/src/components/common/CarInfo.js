import Input from '@lib/share/items/Input';
import SelectBox from '@lib/share/items/SelectBox';
import { select_day_list } from '@src/dummy';

const CarInfo = () => {
  return (
    <fieldset>
      <legend className="away">차량 기본 정보</legend>
      <table summary="차량 기본 정보에 대한 내용" className="table-tp1 input fs14">
        <caption>차량 기본 정보</caption>
        <colgroup>
          <col width="15%" />
          <col width="30%" />
          <col width="15%" />
          <col width="30%" />
        </colgroup>
        <tbody>
          <tr>
            <th>차명</th>
            <td>기아 더 뉴 K7 3.0 GDI 프레스티지</td>
            <th>차량등록번호</th>
            <td>60가4397</td>
          </tr>
          <tr>
            <th>연식</th>
            <td>2015년 </td>
            <th>검사유효년도</th>
            <td>
              <Input type="text" id="note1" placeHolder="20180504" width={123} height={40} />
              <em className="mg8">-</em>
              <Input type="text" id="valid-year-until" placeHolder="20180504" width={123} height={40} />
            </td>
          </tr>
          <tr>
            <th>최초등록일</th>
            <td>
              <em className="mr8">2015년 05월</em>
              <SelectBox id="register-date" className="items-sbox" options={select_day_list} width={100} height={40} />
            </td>
            <th>변속기종류</th>
            <td>오토</td>
          </tr>
          <tr>
            <th>사용연료</th>
            <td>가솔린</td>
            <th>차대번호</th>
            <td><Input type="text" id="vin-number" height={40} /></td>
          </tr>
          <tr>
            <th>보증유형</th>
            <td>가솔린</td>
            <th>출고가격</th>
            <td><Input type="text" id="release-price" height={40} /></td>
          </tr>
          <tr>
            <th>가격산정 기준가격</th>
            <td>
              <Input type="text" id="criteria-price1" width={160} height={40} />
              <em>만원</em>
            </td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  )
}

export default CarInfo;