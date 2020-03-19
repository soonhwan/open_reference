import Link from 'next/link'

const Footer = () => {
  return (
    <footer id="footer-sec">
      <div className="sec-top">
        <div className="inner">
          <h3 className="hide">하단 메뉴</h3>
          <ul className="ft-menu">
            <li><Link href=""><a>회사소개</a></Link></li>
            <li><Link href=""><a>제휴문의</a></Link></li>
            <li><Link href=""><a>이용/환불약관</a></Link></li>
            <li><Link href=""><a>개인정보처리방침</a></Link></li>
            <li><Link href=""><a>영상정보처리방침</a></Link></li>
          </ul>
        </div>
      </div>
      <div className="sec-bottom">
        <div className="inner">
          <h2 className="ft-logo"><Link href="/main"><a>하단 로고</a></Link></h2>
          <div className="copyright">
            <p><span>현대글로비스㈜ 서울특별시 강남구 테헤란로 301</span><i className="line"></i><span>사업자등록번호 : 106-81-97118</span></p>
            <p><span>COPYRIGHT (C) HYUNDAI GLOVIS CO., LTD. ALL RIGHTS RESERVED.</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer