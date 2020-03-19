import CheckBox from '@lib/share/items/CheckBox'
import Input from '@lib/share/items/Input'

const CarAddOption = ({disabled=false}) =>{
    return(
        <div className="option-add">
            <h4 className="mb33">추가 옵션</h4>
            <div className="car-option-add">
                <ul>
                <li>
                    <CheckBox id='chk-snow-pearl' title='스노우 화이트 펄' disabled={disabled} />
                </li>
                <li>
                    <CheckBox id='chk-sunroof-add' title='선루프' disabled={disabled} />
                </li>
                <li>
                    <CheckBox id='chk-navigation-add' title='네비게이션(7인치)' disabled={disabled} />
                </li>
                <li>
                    <CheckBox id='chk-auto-mirror' title='전자식 룸미러' disabled={disabled} />
                </li>
                <li>
                    <CheckBox id='chk-comfort' title='컴포트' disabled={disabled} />
                </li>
                <li>
                    <CheckBox id='chk-high-tech' title='하이테크' disabled={disabled} />
                </li>
                </ul>
                <label htmlFor="direct-input">직접입력</label>
                <Input type="text" placeHolder="표시되지 않은 추가 옵션, 패키지 옵션은 직접 입력해주세요." id="direct-input" width="100%" height={48} disabled={disabled} />
            </div>
        </div>
    )
}

export default CarAddOption;