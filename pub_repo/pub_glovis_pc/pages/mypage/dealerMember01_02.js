import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import MypageNavi from '@src/components/common/MypageNavi';
import DatePicker from '@src/components/common/calendar/DatePicker';
import Buttons from '@lib/share/items/Buttons';
import Button from '@lib/share/items/Button';
import Input from '@lib/share/items/Input';
import SelectBox from '@lib/share/items/SelectBox';
import Textarea from '@lib/share/items/Textarea';
import { select1_list } from '@src/dummy';
import { SECTION_MYPAGE } from '@src/actions/types';

const DealerMember01_02 = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_MYPAGE });

  const textareaChange = (e) => {
    console.log('textareaChange');
    console.log(e);
  }
  const textareaBlur = (e) => {
    console.log('textareaBlur');
    console.log(e);
  }
  const textareaFocus = (e) => {
    console.log('textareaFocus');
    console.log(e);
  }

  return (
    <AppLayout>
      <div className="content-wrap">
        <MypageNavi mode="dealer" />

        <div className="mypage-state-sec member-info-modify">
          <div className="mypage-admin-title">
            <h3>회원정보 수정</h3>
          </div>

          {/* 딜러회원 */}
          <table className="table-tp1 input" summary="회원정보 수정 내용">
            <caption className="away">회원정보 수정</caption>
            <colgroup>
              <col width="30%" />
              <col width="70%" />
            </colgroup>
            <tbody>
              <tr>
                <th>소속상사명/대표자명<span className="essential">*</span></th>
                <td><Input type="text" id="member-modify1" width={223} height={40} /></td>
              </tr>
              <tr>
                <th>소속단지<span className="essential">*</span></th>
                <td>
                  <SelectBox id="member-modify2" className="items-sbox mr8" options={select1_list} width={224} />
                  <SelectBox id="member-modify3" className="items-sbox" options={select1_list} width={224} />
                </td>
              </tr>
              <tr className="worker-num">
                <th>종사원번호/유효기간<span className="essential">*</span></th>
                <td>
                  <Input type="text" placeHolder="사원증을 입력하세요" id="member-modify4" width={224} height={40} />
                  <DatePicker inputWidth={224} inputHeight={40} />
                </td>
              </tr>
              <tr>
                <th>종사원증 이미지<span className="essential">*</span></th>
                <td>
                  <span className="bridge2">
                    <em className="mr16">앞면</em>
                    <Input type="text" disabled={true} id="member-modify5" width={224} height={40} />
                    <Button size="big" background="blue80" title="찾아보기" width={140} height={40} marginLeft={8} />
                  </span><br />
                  <span className="bridge2">
                    <em className="mr16">뒷면</em>
                    <Input type="text" disabled={true} id="member-modify6" width={224} height={40} />
                    <Button size="big" background="blue80" title="찾아보기" width={140} height={40} marginLeft={8} />
                    <p className="tx-exp-tp5 mt20 mb8">* 종 사원증 이미지는 앞뒤면을 모두 등록해주세요.</p>
                  </span>
                </td>
              </tr>
              <tr>
                <th>프로필 사진</th>
                <td>
                  <Input type="text" disabled={true} id="member-modify7" width={224} height={40} />
                  <Button size="big" background="blue80" title="찾아보기" width={140} height={40} marginLeft={8} marginRight={16} />
                  <SelectBox id="member-modify8" placeHolder="공개" className="items-sbox" options={select1_list} width={125} />
                  <p className="tx-exp-tp5 mt20">* 이미지 등록기준 : 80X100 사이즈 / JPG 파일</p>
                  <p className="tx-exp-tp5 mb8">* 본인 프로필이 아닌 사진(예 : 연예인, 동물 등) 등록 시 삭제될 수도 있습니다.</p>
                </td>
              </tr>
              <tr>
                <th>사업자 여부</th>
                <td>
                  <SelectBox id="member-modify9" placeHolder="예" className="items-sbox mr8" options={select1_list} width={125} />
                  <Input type="text" placeHolder="사업자 등록번호를 입력하세요." id="member-modify7" width={266} height={40} />
                </td>
              </tr>
              <tr className="address">
                <th>판매점 주소<span className="essential">*</span></th>
                <td>
                  <Input type="text" disabled={true} id="member-modify8" width={110} height={40} />
                  <Button size="big" background="blue80" title="우편번호" width={140} height={40} /><br />
                  <Input type="text" disabled={true} id="member-modify9" width={258} height={40} />
                  <Input type="text" id="member-modify10" width={258} height={40} />
                </td>
              </tr>
              <tr>
                <th>판매점 연락처<span className="essential">*</span></th>
                <td>
                  <SelectBox id="member-modify10" placeHolder="02" className="items-sbox" options={select1_list} width={125} />
                  <em className="mg8">-</em>
                  <Input type="text" id="member-modify11" width={125} height={40} />
                  <em className="mg8">-</em>
                  <Input type="text" id="member-modify12" width={125} height={40} />
                </td>
              </tr>
              <tr>
                <th>팩스<span className="essential">*</span></th>
                <td>
                  <SelectBox id="member-modify13" placeHolder="02" className="items-sbox" options={select1_list} width={125} />
                  <em className="mg8">-</em>
                  <Input type="text" id="member-modify14" width={125} height={40} />
                  <em className="mg8">-</em>
                  <Input type="text" id="member-modify15" width={125} height={40} />
                </td>
              </tr>
              <tr>
                <th>영업시간<span className="essential">*</span></th>
                <td><Textarea countLimit={500} type="tp1" onChange={textareaChange} onBlur={textareaBlur} onFocus={textareaFocus} /></td>
              </tr>
            </tbody>
          </table>

          {/* 단체회원 */}
          <table className="table-tp1 input" summary="회원정보 수정 내용">
            <caption className="away">회원정보 수정</caption>
            <colgroup>
              <col width="30%" />
              <col width="70%" />
            </colgroup>
            <tbody>
              <tr>
                <th>소속상사명/대표자명<span className="essential">*</span></th>
                <td><Input type="text" id="member-modify2-1" width={223} height={40} /></td>
              </tr>
              <tr>
                <th>소속단지<span className="essential">*</span></th>
                <td><Input type="text" id="member-modify2-1" width={223} height={40} /></td>
              </tr>
              <tr className="address">
                <th>사업자 주소<span className="essential">*</span></th>
                <td>
                  <Input type="text" disabled={true} id="member-modify2-8" width={110} height={40} />
                  <Button size="big" background="blue80" title="우편번호" width={140} height={40} /><br />
                  <Input type="text" disabled={true} id="member-modify2-9" width={258} height={40} />
                  <Input type="text" id="member-modify2-10" width={258} height={40} />
                </td>
              </tr>
              <tr>
                <th>사업자등록증 이미지</th>
                <td>
                  <Input type="text" disabled={true} id="member-modify2-7" width={224} height={40} />
                  <Button size="big" background="blue80" title="찾아보기" width={140} height={40} marginLeft={8} marginRight={16} />
                </td>
              </tr>
              <tr>
                <th>관리자사업등록증 이미지</th>
                <td>
                  <Input type="text" disabled={true} id="member-modify2-7" width={224} height={40} />
                  <Button size="big" background="blue80" title="찾아보기" width={140} height={40} marginLeft={8} marginRight={16} />
                </td>
              </tr>
              <tr>
                <th>프로필 사진</th>
                <td>
                  <Input type="text" disabled={true} id="member-modify2-7" width={224} height={40} />
                  <Button size="big" background="blue80" title="찾아보기" width={140} height={40} marginLeft={8} marginRight={16} />
                  <SelectBox id="member-modify2-8" placeHolder="공개" className="items-sbox" options={select1_list} width={125} />
                  <p className="tx-exp-tp5 mt20">* 이미지 등록기준 : 80X100 사이즈 / JPG 파일</p>
                  <p className="tx-exp-tp5 mb8">* 본인 프로필이 아닌 사진(예 : 연예인, 동물 등) 등록 시 삭제될 수도 있습니다.</p>
                </td>
              </tr>
              <tr className="address">
                <th>판매점 주소<span className="essential">*</span></th>
                <td>
                  <Input type="text" disabled={true} id="member-modify2-8" width={110} height={40} />
                  <Button size="big" background="blue80" title="우편번호" width={140} height={40} /><br />
                  <Input type="text" disabled={true} id="member-modify2-9" width={258} height={40} />
                  <Input type="text" id="member-modify2-10" width={258} height={40} />
                </td>
              </tr>
              <tr>
                <th>판매점 연락처<span className="essential">*</span></th>
                <td>
                  <SelectBox id="member-modify2-10" placeHolder="02" className="items-sbox" options={select1_list} width={125} />
                  <em className="mg8">-</em>
                  <Input type="text" id="member-modify2-11" width={125} height={40} />
                  <em className="mg8">-</em>
                  <Input type="text" id="member-modify2-12" width={125} height={40} />
                </td>
              </tr>
              <tr>
                <th>팩스<span className="essential">*</span></th>
                <td>
                  <SelectBox id="member-modify2-13" placeHolder="02" className="items-sbox" options={select1_list} width={125} />
                  <em className="mg8">-</em>
                  <Input type="text" id="member-modify2-14" width={125} height={40} />
                  <em className="mg8">-</em>
                  <Input type="text" id="member-modify2-15" width={125} height={40} />
                </td>
              </tr>
              <tr>
                <th>영업시간<span className="essential">*</span></th>
                <td><Textarea countLimit={500} type="tp2" /></td>
              </tr>
            </tbody>
          </table>

          <Buttons align="center" marginTop={48}>
            <Button size="big" background="blue80" title="수정완료" width={248} height={60}/>
          </Buttons>
        </div>
      </div>
    </AppLayout>
  )
}

export default DealerMember01_02
