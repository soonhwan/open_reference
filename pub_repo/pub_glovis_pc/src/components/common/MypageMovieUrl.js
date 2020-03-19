import RadioGroup from '@lib/share/items/RadioGroup'
import Input from '@lib/share/items/Input'

const MypageMovieUrl = () =>{
    return(
        <div className="register-movie">
            <h4>동영상</h4>
            <div className="movie-state">
              <RadioGroup dataList={[
                {id:'movie1', value:1, checked:true, disabled:false, title:'없음'},
                {id:'movie2', value:2, checked:false, disabled:false, title:'있음'}
              ]} />
            </div>
            <div className="movie-link-wrap">
              <p className="input-name">Link (URL)</p> 
              <Input type="text" id="movie3" width='100%' height={48} />
              <p className="tx-exp-tp5">* 차량상세 > 차량정보 상단에 노출됩니다.</p>
            </div>
          </div>
    )
}

export default MypageMovieUrl;

