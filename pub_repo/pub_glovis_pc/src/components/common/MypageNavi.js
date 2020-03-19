import Button from '@lib/share/items/Button'

const MypageNavi = ({mode="normal"}) => { // normal(일반), dealer(딜러), guest(비회원)
  return (
    <div className="mypage-nav-sec">
      {
        mode === "normal" && (
          <>
            <ul className="mypage-profile">
              <li className="tit">마이페이지</li>
              <li className="name">김현대님, 환영합니다.</li>
              <li className="user-info">
                휴대폰 010 - 1234 -5678<br />
                이메일 autobeluser@naver.com
                <Button size="full" background="blue80" title="회원정보 수정" height={48} marginTop={11} />
              </li>
            </ul>
            <div className="mypage-menu">
              <ul>
                <li className="none">내차사기</li>
                <li><a href="">관심차량</a></li>
                <li><a href="">최근 본 차량</a></li>
                <li><a href="">쪽지상담 내역</a></li>
                <li><a href="">홈서비스 내역</a></li>
              </ul>
              <ul>
                <li className="none">내차팔기</li>
                <li><a href="">현황 조회</a></li>
                <li><a href="">오토옥션 출품내역</a></li>
              </ul>
              <ul className="straight">
                <li><a href="">금융 서비스</a></li>
              </ul>
              <ul>
                <li className="none">회원정보 관리</li>
                <li><a href="">회원정보 수정</a></li>
                <li><a href="">비밀번호 변경</a></li>
                <li><a href="">나의 문의내역</a></li>
                <li><a href="">회원탈퇴</a></li>
              </ul>
            </div>
          </>
        )
      }
      {
        mode === "dealer" && (
          <>
            <ul className="mypage-profile dealer">
              <li className="name">
                <p>
                  <span>[딜러]</span>최딜러님
                  <span className="day">[-98일]</span>
                </p>
              </li>
              <li className="tag">
                <em className="tag-tp4 bg-sky80">홈</em>
                <em className="tag-tp4 bg-green">프</em>
                <em className="tag-tp4 bg-purple">오</em>
                <em className="tag-tp4 bg-yellow">Fc</em>
              </li>
              <li className="notice">
                <ul>
                  <li><em>3</em><i></i>홈 서비스<br />예약</li>
                  <li><em>2</em><i></i>문의</li>
                  <li><em>2</em><i></i>알림</li>
                </ul>
              </li>
              <li className="save">
                <p className="point">포인트 : <span>3,000</span></p>
                <p className="coupon">쿠폰 : <span>3</span>개</p>
              </li>
            </ul>
            <div className="mypage-menu">
              <ul>
                <li className="none">내차팔기</li>
                <li><a href="">등록차량 및 광고관리</a></li>
                <li><a href="">차량등록</a></li>
                <li><a href="">나의 설명글 관리</a></li>
                <li><a href="">홈서비스 예약/판매 현황</a></li>
                <li><a href="">보증 차량 판매 현황</a></li>
                <li><a href="">Live Studio 촬영 예약</a></li>
              </ul>
              <ul>
                <li className="none">내차사기</li>
                <li><a href="">24시간 실시간 비교견적</a></li>
              </ul>
              <ul>
                <li className="none">오토옥션 이용현황</li>
                <li><a href="">경매회원 안내</a></li>
                <li><a href="">경매장 이용현황</a></li>
              </ul>
              <ul className="straight">
                <li><a href="">프라이싱센터 바로가기</a></li>
              </ul>
              <ul>
                <li className="none">회원정보 관리</li>
                <li><a href="">회원정보/소개 관리</a></li>
                <li><a href="">차량 판매 후기 관리</a></li>
              </ul>
            </div>
          </>
          )
      }
      {
        mode === "guest" && (
          <ul className="mypage-profile guest">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        )
      }
    </div>
  )
}

export default MypageNavi;