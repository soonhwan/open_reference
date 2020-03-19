import RadioGroup from '@lib/share/items/RadioGroup'
import Input from '@lib/share/items/Input'

const CarDetails = () => {
  return (
    <fieldset>
      <legend className="away">차량 세부사항</legend>
      <table summary="차량 세부사항" className="table-tp1 input th-c td-c">
        <caption>차량 세부사항</caption>
        <colgroup>
          <col width="10%" />
          <col width="15%" />
          <col width="18%" />
          <col width="27%" />
          <col width="17%" />
          <col width="13%" />
        </colgroup>
        <thead>
          <tr>
            <th>장치</th>
            <th>항목</th>
            <th>해당부품</th>
            <th>상태</th>
            <th>가격조사 산정액</th>
            <th>특기사항</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="2">자기진단</td>
            <td colSpan="2">원동기</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state5', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state6', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td>
              <Input type="text" id="calculated13" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note15" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td colSpan="2">변속기</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state7', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state8', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td>
              <Input type="text" id="calculated14" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note16" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td rowSpan="9">원동기</td>
            <td colSpan="2">작동상태(공회전)</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state9', value:1, checked:true, disabled:false, title:'적정'},
                {id:'state10', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td rowSpan="9">
              <Input type="text" id="calculated15" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note17" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td rowSpan="3">오일누유</td>
            <td>로커암커버</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state11', value:1, checked:true, disabled:false, title:'없음'},
                {id:'state12', value:2, checked:false, disabled:false, title:'미세누유'},
                {id:'state13', value:3, checked:false, disabled:false, title:'누유'}
              ]} />
            </td>
            <td><Input type="text" id="note18" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td>실린더 헤더/가스켓</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state14', value:1, checked:true, disabled:false, title:'없음'},
                {id:'state15', value:2, checked:false, disabled:false, title:'미세누유'},
                {id:'state16', value:3, checked:false, disabled:false, title:'누유'}
              ]} />
            </td>
            <td><Input type="text" id="note19" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td>오일팬</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state17', value:1, checked:true, disabled:false, title:'없음'},
                {id:'state18', value:2, checked:false, disabled:false, title:'미세누유'},
                {id:'state19', value:3, checked:false, disabled:false, title:'누유'}
              ]} />
            </td>
            <td><Input type="text" id="note20" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td colSpan="2">오일유량</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state20', value:1, checked:true, disabled:false, title:'적정'},
                {id:'state21', value:2, checked:false, disabled:false, title:'부족'}
              ]} />
            </td>
            <td><Input type="text" id="note21" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td rowSpan="4">냉각수 누수</td>
            <td>실린더 헤드/가스켓</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state22', value:1, checked:true, disabled:false, title:'없음'},
                {id:'state23', value:2, checked:false, disabled:false, title:'미세누유'},
                {id:'state24', value:2, checked:false, disabled:false, title:'누유'}
              ]} />
            </td>
            <td><Input type="text" id="note22" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td>워터 펌프</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state25', value:1, checked:true, disabled:false, title:'없음'},
                {id:'state26', value:2, checked:false, disabled:false, title:'미세누유'},
                {id:'state27', value:2, checked:false, disabled:false, title:'누유'}
              ]} />
            </td>
            <td><Input type="text" id="note23" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td>라디에이터</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state28', value:1, checked:true, disabled:false, title:'없음'},
                {id:'state29', value:2, checked:false, disabled:false, title:'미세누유'},
                {id:'state30', value:2, checked:false, disabled:false, title:'누유'}
              ]} />
            </td>
            <td><Input type="text" id="note24" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td>냉각수 수량</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state31', value:1, checked:true, disabled:false, title:'적정'},
                {id:'state32', value:2, checked:false, disabled:false, title:'부족'}
              ]} />
            </td>
            <td><Input type="text" id="note25" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td rowSpan="3">변속기</td>
            <td rowSpan="3">자동변속기</td>
            <td>오일누유</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state33', value:1, checked:true, disabled:false, title:'없음'},
                {id:'state34', value:2, checked:false, disabled:false, title:'미세누유'},
                {id:'state35', value:3, checked:false, disabled:false, title:'누유'}
              ]} />
            </td>
            <td rowSpan="3">
              <Input type="text" id="calculated16" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note26" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td>오일 누유 및 상태</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state36', value:1, checked:true, disabled:false, title:'적정'},
                {id:'state37', value:2, checked:false, disabled:false, title:'부족'},
                {id:'state38', value:3, checked:false, disabled:false, title:'과다'}
              ]} />
            </td>
            <td><Input type="text" id="note27" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td>작동상태(공회전)</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state39', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state40', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td><Input type="text" id="note28" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td rowSpan="3">동력전달</td>
            <td colSpan="2">클러치 어셈블리</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state41', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state42', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td rowSpan="3">
              <Input type="text" id="calculated17" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note29" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td colSpan="2">등속죠인트</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state43', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state44', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td><Input type="text" id="note30" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td colSpan="2">추진축 및 베어링</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state45', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state46', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td><Input type="text" id="note31" width='100%' height={40} /></td>
          </tr>
          
          <tr>
            <td rowSpan="4">조향</td>
            <td colSpan="2">동력조향 작동 오일누유</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state47', value:1, checked:true, disabled:false, title:'없음'},
                {id:'state48', value:2, checked:false, disabled:false, title:'미세누유'},
                {id:'state49', value:2, checked:false, disabled:false, title:'누유'}
              ]} />
            </td>
            <td rowSpan="4">
              <Input type="text" id="calculated18" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note32" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td rowSpan="3">작동상태</td>
            <td>스티어링 기어</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state50', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state51', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td><Input type="text" id="note33" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td>스티어링 펌프</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state52', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state53', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td><Input type="text" id="note34" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td>타이로드 앤드 및 볼죠인트</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state54', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state55', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td><Input type="text" id="note35" width='100%' height={40} /></td>
          </tr>

          <tr>
            <td rowSpan="3">제동</td>
            <td colSpan="2">브레이크 마스터 실린더오일 누유</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state56', value:1, checked:true, disabled:false, title:'없음'},
                {id:'state57', value:2, checked:false, disabled:false, title:'미세누유'},
                {id:'state58', value:2, checked:false, disabled:false, title:'누유'}
              ]} />
            </td>
            <td rowSpan="3">
              <Input type="text" id="calculated19" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note36" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td colSpan="2">브레이크 오일 누유</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state59', value:1, checked:true, disabled:false, title:'없음'},
                {id:'state60', value:2, checked:false, disabled:false, title:'미세누유'},
                {id:'state61', value:2, checked:false, disabled:false, title:'누유'}
              ]} />
            </td>
            <td><Input type="text" id="note37" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td colSpan="2">배력장치 상태</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state62', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state63', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td><Input type="text" id="note38" width='100%' height={40} /></td>
          </tr>

          <tr>
            <td rowSpan="6">전기</td>
            <td colSpan="2">발전기 출력</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state64', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state65', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td rowSpan="6">
              <Input type="text" id="calculated20" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note39" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td colSpan="2">시동모터</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state66', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state67', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td><Input type="text" id="note40" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td colSpan="2">와이퍼 모터기능</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state68', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state69', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td><Input type="text" id="note41" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td colSpan="2">살내송풍 모터</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state70', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state71', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td><Input type="text" id="note42" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td colSpan="2">라디에이터 팬 모터</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state72', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state73', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td><Input type="text" id="note43" width='100%' height={40} /></td>
          </tr>
          <tr>
            <td colSpan="2">윈도우 모터 작동</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state74', value:1, checked:true, disabled:false, title:'양호'},
                {id:'state75', value:2, checked:false, disabled:false, title:'불량'}
              ]} />
            </td>
            <td><Input type="text" id="note44" width='100%' height={40} /></td>
          </tr>

          <tr>
            <td>기타</td>
            <td colSpan="2">연료누출(LP 가스 포함)</td>
            <td className="tl">
              <RadioGroup dataList={[
                {id:'state76', value:1, checked:true, disabled:false, title:'없음'},
                {id:'state77', value:2, checked:false, disabled:false, title:'있음'}
              ]} />
            </td>
            <td>
              <Input type="text" id="calculated21" width={92} height={40} />
              <em>만원</em>
            </td>
            <td><Input type="text" id="note45" width='100%' height={40} /></td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  )
}

export default CarDetails