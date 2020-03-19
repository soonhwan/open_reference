const BtnKakao = ({type=1, style}) =>{
  return(
    <button className={`btn-kakao tp${type}`} style={style}>KAKAO</button>
  )
}

export default BtnKakao