import Button from '@lib/share/items/Button'
import RadioGroup from '@lib/share/items/RadioGroup'
import SelectBox from '@lib/share/items/SelectBox'
import { select1_list } from '@src/dummy'

const MypageMortgage = () =>{
    return(
        <div className="mortgage">
            <h4>압류/저당 입력</h4>
            <div className="mortgage-state">
              <RadioGroup dataList={[
                {id:'mortgage1', value:1, checked:true, disabled:false, title:'없음'},
                {id:'mortgage2', value:2, checked:false, disabled:false, title:'있음'}
              ]} />
              <SelectBox id="mortgage3" className="items-sbox" options={select1_list} width={240} height={40} />
            </div>
            <div className="align-wrap mt20">
              <p>판매차량의 자동차등록원부에 기재되어 있는 압류/저당 정보를 입력해 주세요.</p>
              <Button size="big" background="blue80" title="자동차등록원부 열람하기" href="https://www.minwon.go.kr/main?a=AA020InfoCappViewApp&HighCtgCD=A12005009&CappBizCD=15000000334" width={256} />
            </div>
        </div>
    )
}

export default MypageMortgage;

