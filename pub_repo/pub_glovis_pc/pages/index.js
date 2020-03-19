import Link from 'next/link'
import Tooltip from '@lib/share/items/Tooltip'
import TooltipItem from '@lib/share/items/TooltipItem'
import TooltipCont from '@lib/share/items/TooltipCont'

const Index = () => {

  const createProgress = (num) => {
    let progress_style = ''
    if (num >= 10 && num <= 49) {
      progress_style = 'grade10'
    } else if (num >= 50 && num <= 59) {
      progress_style = 'grade50'
    } else if (num >= 60 && num <= 69) {
      progress_style = 'grade60'
    } else if (num >= 70 && num <= 79) {
      progress_style = 'grade70'
    } else if (num >= 80 && num <= 89) {
      progress_style = 'grade80'
    } else if (num >= 90 && num <= 99) {
      progress_style = 'grade90'
    } else if (num === 100) {
      progress_style = 'grade100'
    }
    return (
      <div className={progress_style}>
        <p>{num}%</p>
        <span><em style={{ width: `${num}%` }}></em></span>
      </div>
    )
  }

  return (
    <div className="coding-wrap">
      <div className="map-header">
        <h3>GLOVIS <b>CODING MAP</b></h3>
        <ul className="map-tit">
          <li>Depth1</li>
          <li>Depth2</li>
          <li>Depth3</li>
          <li>Depth4</li>
          <li>Depth5</li>
          <li>Screen ID</li>
          <li className="file">File</li>
          <li className="progress">Progress</li>
          <li className="link">Link</li>
          <li>Description</li>
        </ul>
      </div>

      <ul className="coding-map">
        <li> {/* 스타일 가이드 */}
          <ul className="row">
            <li><span>스타일 가이드</span></li>
            <li><span>스타일 가이드</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li className="file"><span>commonStyle</span></li>
            <li className="progress">{createProgress(50)}</li>
            <li className="link"><Link href="/commonStyle"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li> {/* 메인 */}
          <ul className="row">
            <li className="nbd"><span>메인</span></li>
            <li><span>메인</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li className="file"><span>main</span></li>
            <li className="progress">{createProgress(50)}</li>
            <li className="link"><Link href="main"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>

        <li> {/* 내차사기 */}
          <ul className="row">
            <li className="nbd"><span>내차사기</span></li>
            <li><span>내차사기</span></li>
            <li><span>전체차량(검색 O)</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-BC-MA-001</span></li>
            <li className="file"><span>buy/list</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/buy/list"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 퀵뷰 팝업 진행중</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>전체차량(검색 X)</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-BC-MA-001</span></li>
            <li className="file"><span>buy/list?result=no</span></li>
            <li className="progress">{createProgress(99)}</li>
            <li className="link"><Link href="/buy/list?result=no"><a className="link-btn" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 퀵뷰 팝업 진행중</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>일반/수입/금융사 상세</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-BC-AC-001</span></li>
            <li className="file"><span>buy/viewA</span></li>
            <li className="progress">{createProgress(80)}</li>
            <li className="link"><Link href="/buy/viewA"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span>오토벨라이브스튜디오</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-BC-MA-001</span></li>
            <li className="file"><span>buy/liveList</span></li>
            <li className="progress">{createProgress(99)}</li>
            <li className="link"><Link href="/buy/liveList"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 퀵뷰 팝업 진행중</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>라이브스튜디오</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-BC-LS-003</span></li>
            <li className="file"><span>buy/liveGuide</span></li>
            <li className="progress">{createProgress(99)}</li>
            <li className="link"><Link href="/buy/liveGuide"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>라이브스튜디오 상세</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-BC-LS-001</span></li>
            <li className="file"><span>buy/viewC</span></li>
            <li className="progress">{createProgress(60)}</li>
            <li className="link"><Link href="/buy/viewC"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 라이브스튜디오 섹션</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span>경매낙찰차량</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-BC-MA-001</span></li>
            <li className="file"><span>buy/auctionList</span></li>
            <li className="progress">{createProgress(99)}</li>
            <li className="link"><Link href="/buy/auctionList"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 퀵뷰 팝업 진행중</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>경매낙찰차량 상세</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-BC-AU-001</span></li>
            <li className="file"><span>buy/viewB</span></li>
            <li className="progress">{createProgress(80)}</li>
            <li className="link"><Link href="/buy/viewB"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span>인증몰</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-BC-CM-001</span></li>
            <li className="file"><span>buy/certifyMall</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/buy/certifyMall"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>인증브랜드 리스트</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-BC-CM-002</span></li>
            <li className="file"><span>buy/brandList</span></li>
            <li className="progress">{createProgress(99)}</li>
            <li className="link"><Link href="/buy/brandList"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 퀵뷰 팝업 진행중</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span>공통</span></li>
            <li><span></span></li>
            <li><span>판매자 정보</span></li>
            <li><span></span></li>
            <li><span>IA-BC-DT-007</span></li>
            <li className="file">buy/sellerInfo<span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href="/buy/sellerInfo"><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span>내차팔기</span></li>
            <li><span>내차팔기</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-MA-001</span></li>
            <li className="file"><span>sell/sellHome</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/sell/sellHome"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span>방문평가판매</span></li>
            <li><span>방문평가신청</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-VS-001</span></li>
            <li className="file"><span>sell/visitApply</span></li>
            <li className="progress">{createProgress(95)}</li>
            <li className="link"><Link href="/sell/visitApply"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 이미지 업로드 후 적용</p>
                      <p>- 동의 전문 레이어 팝업 : 수급 후 마크업</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>방문평가완료</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-VS-006</span></li>
            <li className="file"><span>sell/visitComplete</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/sell/visitComplete"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>셀프등록판매</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-SS-009</span></li>
            <li className="file"><span>sell/selfHome</span></li>
            <li className="progress">{createProgress(95)}</li>
            <li className="link"><Link href="/sell/selfHome"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 슬라이드 배너 이미지 교체</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>본인인증</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-SS-001</span></li>
            <li className="file"><span>sell/selfCertify</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/sell/selfCertify"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>차량정보조회</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-SS-002</span></li>
            <li className="file"><span>sell/selfStep01</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/sell/selfStep01"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>차량정보입력</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-NS-002</span></li>
            <li className="file"><span>sell/selfStep02</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/sell/selfStep02"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 차량명 수정 팝업 : 컴포넌트 적용</p>
                      <p>- 동의 전문 레이어 팝업 : 수급 후 마크업</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>차량사진등록</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-NS-004</span></li>
            <li className="file"><span>sell/selfStep03</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/sell/selfStep03"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>신청내용확인</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-NS-005</span></li>
            <li className="file"><span>sell/selfStep04</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/sell/selfStep04"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>신청완료</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-SS-007</span></li>
            <li className="file"><span>sell/selfStep05</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/sell/selfStep05"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>무평가판매</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-NS-006</span></li>
            <li className="file"><span>sell/freeHome</span></li>
            <li className="progress">{createProgress(95)}</li>
            <li className="link"><Link href="/sell/freeHome"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 슬라이드 배너 이미지 교체</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>본인인증</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-NS-001</span></li>
            <li className="file"><span>sell/freeCertify</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/sell/freeCertify"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>차량정보조회</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-NS-002</span></li>
            <li className="file"><span>sell/freeStep01</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/sell/freeStep01"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>차량정보입력01</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-NS-003</span></li>
            <li className="file"><span>sell/freeStep02_01</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/sell/freeStep02_01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
            <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 차량명 수정 팝업 : 컴포넌트 적용</p>
                      <p>- 동의 전문 레이어 팝업 : 수급 후 마크업</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>차량정보입력02</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-NS-004</span></li>
            <li className="file"><span>sell/freeStep02_02</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/sell/freeStep02_02"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>신청완료</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SC-NS-005</span></li>
            <li className="file"><span>sell/freeStep03</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/sell/freeStep03"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span>시세조회</span></li>
            <li><span>시세조회</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SP-MA-001</span></li>
            <li className="file"><span>marketPrice/marketPrice</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/marketPrice/marketPrice"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>리포트</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-SP-MA-001</span></li>
            <li className="file"><span>marketPrice/report</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/marketPrice/report"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span>홈서비스</span></li>
            <li><span>홈서비스</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-HS-CS-001</span></li>
            <li className="file"><span>homeService/serviceHome</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/homeService/serviceHome"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 온라인 구매 버튼 클릭 시 로그인 팝업<br /> : 디자인 업로드 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>서비스안내</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-HS-GS-001</span></li>
            <li className="file"><span>homeService/serviceInfo</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/homeService/serviceInfo"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 환불 규정 팝업 : 수급 후 마크업</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>차량정보확인</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-HS-GA-001</span></li>
            <li className="file"><span>homeService/serviceStep01</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/homeService/serviceStep01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 팝업01 : 마크업 진행중</p>
                      <p>- 팝업02 : 마크업 완료</p>
                      <p>- 팝업03 : 수급 후 마크업</p>
                      <p>- 팝업04 : 수급 후 마크업</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>보증상품선택</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-HS-GA-002</span></li>
            <li className="file"><span>homeService/serviceStep02</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/homeService/serviceStep02"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>계약자정보입력</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-HS-GA-003</span></li>
            <li className="file"><span>homeService/serviceStep03</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/homeService/serviceStep03"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>개인정보입력</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-HS-GA-004</span></li>
            <li className="file"><span>homeService/serviceStep03_01</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/homeService/serviceStep03_01"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 동의 전문 레이어 팝업 : 수급 후 마크업</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>개인사업자정보입력</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-HS-GA-005</span></li>
            <li className="file"><span>homeService/serviceStep03_02</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/homeService/serviceStep03_02"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 동의 전문 레이어 팝업 : 수급 후 마크업</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>법인사업자정보입력</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-HS-GA-006</span></li>
            <li className="file"><span>homeService/serviceStep03_03</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/homeService/serviceStep03_03"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 동의 전문 레이어 팝업 : 수급 후 마크업</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>예상결제금액확인</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-HS-GA-007</span></li>
            <li className="file"><span>homeService/serviceStep04</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/homeService/serviceStep04"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>신청완료</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-HS-GA-008</span></li>
            <li className="file"><span>homeService/serviceStep05</span></li>
            <li className="progress">{createProgress(99)}</li>
            <li className="link"><Link href="/homeService/serviceStep05"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 하단 배너 : 이미지 업로드 시 적용</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span>오토옥션</span></li>
            <li><span>메인</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-AA-GS-001</span></li>
            <li className="file"><span>autoAuction/auctionHome</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/autoAuction/auctionHome"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>출품하기</span></li>
            <li><span>경매약관 및 주의사항</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-AA-EA-001</span></li>
            <li className="file"><span>autoAuction/exhibitStep01</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/autoAuction/exhibitStep01"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>회원정보</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-AA-EA-002</span></li>
            <li className="file"><span>autoAuction/exhibitStep02</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/autoAuction/exhibitStep02"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>차량정보</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-AA-EA-003</span></li>
            <li className="file"><span>autoAuction/exhibitStep03</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/autoAuction/exhibitStep03"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>탁송신청</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-AA-EA-004</span></li>
            <li className="file"><span>autoAuction/exhibitStep04</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/autoAuction/exhibitStep04"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>출품완료</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-AA-EA-005</span></li>
            <li className="file"><span>autoAuction/exhibitStep05</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/autoAuction/exhibitStep05"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span>프라이싱시스템</span></li>
            <li><span>프라이싱시스템</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-PS-MA-001</span></li>
            <li className="file"><span>pricingsystem/pricing01</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/pricingSystem/pricing01"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span>마이페이지(일반)</span></li>
            <li><span>마이페이지(일반)</span></li>
            <li><span></span></li>
            <li><span>서비스 이용내역 O<br />최근본차량 O</span></li>
            <li><span></span></li>
            <li><span>IA-MU-MA-001</span></li>
            <li className="file"><span>mypage/generalMain</span></li>
            <li className="progress">{createProgress(99)}</li>
            <li className="link"><Link href="/mypage/generalMain"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 이미지 수급 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>서비스 이용내역 X<br />최근본차량 X</span></li>
            <li><span></span></li>
            <li><span>IA-MU-MA-001</span></li>
            <li className="file"><span>mypage/generalMain?result1=no&result2=no</span></li>
            <li className="progress">{createProgress(99)}</li>
            <li className="link"><Link href="/mypage/generalMain?result1=no&result2=no"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 이미지 수급 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>내차사기</span></li>
            <li><span>관심차량</span></li>
            <li><span>관심차량 O</span></li>
            <li><span></span></li>
            <li><span>IA-MU-BC-002</span></li>
            <li className="file"><span>mypage/generalBuy01</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/generalBuy01"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 비교하기 팝업 이미지 수급 필요</p>
                      <p>- 비교하기 팝업 컴포넌트 작업 필요</p>
                      <p>- 리스크 전체 체크</p>
                      <p>- 더보기 로딩바&amp;(10/30) 표시 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>관심차량 X</span></li>
            <li><span></span></li>
            <li><span>IA-MU-BC-002</span></li>
            <li className="file"><span>mypage/generalBuy01?result=no</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/mypage/generalBuy01?result=no"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>최근본차량</span></li>
            <li><span>최근본차량 O</span></li>
            <li><span></span></li>
            <li><span>IA-MU-BC-003</span></li>
            <li className="file"><span>mypage/generalBuy02</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/generalBuy02"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 비교하기 팝업 이미지 수급 필요</p>
                      <p>- 비교하기 팝업 컴포넌트 작업 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>최근본차량 X</span></li>
            <li><span></span></li>
            <li><span>IA-MU-BC-003</span></li>
            <li className="file"><span>mypage/generalBuy02?result=no</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/mypage/generalBuy02?result=no"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>쪽지상담 내역</span></li>
            <li><span>상담내역 O</span></li>
            <li><span></span></li>
            <li><span>IA-MU-BC-008</span></li>
            <li className="file"><span>mypage/generalBuy03</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/generalBuy03"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 쪽지창 이미지 수급 필요</p>
                      <p>- 쪽지창 컴포넌트 작업 필요</p>
                      <p>- 쪽지창 스크롤 활성화 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>상담내역 X</span></li>
            <li><span></span></li>
            <li><span>IA-MU-BC-008</span></li>
            <li className="file"><span>mypage/generalBuy03?result=no</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/mypage/generalBuy03?result=no"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>홈서비스 내역</span></li>
            <li><span>홈서비스 내역 O</span></li>
            <li><span></span></li>
            <li><span>IA-MU-BC-005</span></li>
            <li className="file"><span>mypage/generalBuy04</span></li>
            <li className="progress">{createProgress(60)}</li>
            <li className="link"><Link href="/mypage/generalBuy04"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 팝업 위치 / 상세 보기&amp;닫기 여부</p>
                      <p>- 결제상세 팝업 디자인 업데이트 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>홈서비스 내역 X</span></li>
            <li><span></span></li>
            <li><span>IA-MU-BC-005</span></li>
            <li className="file"><span>mypage/generalBuy04?result=no</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/mypage/generalBuy04?result=no"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>내차팔기</span></li>
            <li><span>현황조회</span></li>
            <li><span>현황조회 리스트</span></li>
            <li><span>목록 O</span></li>
            <li><span>IA-MU-SC-001</span></li>
            <li className="file"><span>mypage/generalSell01</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/mypage/generalSell01"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>목록 X</span></li>
            <li><span>IA-MU-SC-001</span></li>
            <li className="file"><span>mypage/generalSell01?result=no</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/mypage/generalSell01?result=no"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>방문평가 상세</span></li>
            <li><span>신청완료</span></li>
            <li><span>IA-MU-SC-002</span></li>
            <li className="file"><span>mypage/generalSell_v01</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/mypage/generalSell_v01"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>평가사배정</span></li>
            <li><span>IA-MU-SC-002</span></li>
            <li className="file"><span>mypage/generalSell_v02</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/mypage/generalSell_v02"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>방문 및 견적안내</span></li>
            <li><span>IA-MU-SC-002</span></li>
            <li className="file"><span>mypage/generalSell_v03</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/mypage/generalSell_v03"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>견적 완료 및 판매결정</span></li>
            <li><span>IA-MU-SC-002</span></li>
            <li className="file"><span>mypage/generalSell_v04</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/mypage/generalSell_v04"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>셀프평가 상세</span></li>
            <li><span></span></li>
            <li><span>IA-MU-SC-003</span></li>
            <li className="file"><span>mypage/generalSell_s01</span></li>
            <li className="progress">{createProgress(99)}</li>
            <li className="link"><Link href="/mypage/generalSell_s01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 이미지 수급 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>이용후기</span></li>
            <li><span>IA-MU-SC-004</span></li>
            <li className="file"><span>mypage/generalSell_s02</span></li>
            <li className="progress">{createProgress(99)}</li>
            <li className="link"><Link href="/mypage/generalsell_s02"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 이미지 수급 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>무평가 상세</span></li>
            <li><span></span></li>
            <li><span>IA-MU-SC-007</span></li>
            <li className="file"><span>mypage/generalSell_n01</span></li>
            <li className="progress">{createProgress(99)}</li>
            <li className="link"><Link href="/mypage/generalSell_n01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>오토옥션 출품내역</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-MU-AA-001</span></li>
            <li className="file"><span>mypage/generalSell02</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/mypage/generalSell02"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>금융서비스</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 기획&amp;디자인 업로드 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>회원정보 관리</span></li>
            <li><span>회원정보 수정</span></li>
            <li><span>회원정보 PW</span></li>
            <li><span></span></li>
            <li><span>IA-US-UM-001</span></li>
            <li className="file"><span>mypage/dealerMember01_01</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember01_01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 마이페이지(딜러) 페이지와 동일</p>
                      <p>- 컴포넌트 작업 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>회원정보</span></li>
            <li><span></span></li>
            <li><span>IA-US-UM-002</span></li>
            <li className="file"><span>mypage/generalMember01</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/generalMember01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 스크롤 컴포넌트 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>비밀번호 변경</span></li>
            <li><span>비밀번호 PW</span></li>
            <li><span></span></li>
            <li><span>IA-US-UM-005</span></li>
            <li className="file"><span>mypage/dealerMember01_03</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember01_03"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 마이페이지(딜러) 페이지와 동일</p>
                      <p>- 컴포넌트 작업 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>비밀번호 변경</span></li>
            <li><span></span></li>
            <li><span>IA-US-UM-006</span></li>
            <li className="file"><span>mypage/dealerMember01_04</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember01_04"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 마이페이지(딜러) 페이지와 동일</p>
                      <p>- 컴포넌트 작업 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>나의 문의내역</span></li>
            <li><span>나의 문의내역</span></li>
            <li><span></span></li>
            <li><span>IA-US-UM-007</span></li>
            <li className="file"><span>mypage/generalMember03</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/generalMember03"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 내역 없을 시 페이지 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>나의 문의내역 상세</span></li>
            <li><span></span></li>
            <li><span>IA-US-UM-008</span></li>
            <li className="file"><span>mypage/generalMember03_01</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/mypage/generalMember03_01"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>회원탈퇴</span></li>
            <li><span>회원탈퇴 PW</span></li>
            <li><span></span></li>
            <li><span>IA-US-UM-009</span></li>
            <li className="file"><span>mypage/dealerMember01_05</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember01_05"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 마이페이지(딜러) 페이지와 동일</p>
                      <p>- 컴포넌트 작업 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>회원탈퇴</span></li>
            <li><span></span></li>
            <li><span>IA-US-UM-010</span></li>
            <li className="file"><span>mypage/dealerMember01_06</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember01_06"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 마이페이지(딜러) 페이지와 동일</p>
                      <p>- 컴포넌트 작업 필요</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span>마이페이지(비회원)</span></li>
            <li><span>내차팔기</span></li>
            <li><span>현황조회</span></li>
            <li><span>현황조회 리스트</span></li>
            <li><span></span></li>
            <li><span>IA-MN-SC-001</span></li>
            <li className="file"><span>mypage/guestMain</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/guestMain"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>방문평가 상세</span></li>
            <li><span></span></li>
            <li><span>IA-MN-SC-002</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>셀프평가 상세</span></li>
            <li><span></span></li>
            <li><span>IA-MN-SC-003</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>무평가 상세</span></li>
            <li><span></span></li>
            <li><span>IA-MN-SC-004</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span>마이페이지(딜러)</span></li>
            <li><span>쪽지</span></li>
            <li><span>쪽지 상담내역</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>포인트및쿠폰</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li className="file"><span>mypage/dealerPoint</span></li>
            <li className="progress">{createProgress(70)}</li>
            <li className="link"><Link href="/mypage/dealerPoint"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>내차팔기</span></li>
            <li><span>등록차량및광고관리</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-001</span></li>
            <li className="file"><span>mypage/dealerSell01</span></li>
            <li className="progress">{createProgress(70)}</li>
            <li className="link"><Link href="/mypage/dealerSell01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>차량등록</span></li>
            <li><span>차량조회</span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-200</span></li>
            <li className="file"><span>mypage/dealerSell02_01</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerSell02_01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>차량정보조회</span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-201</span></li>
            <li className="file"><span>mypage/dealerSell02_02</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerSell02_02"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>차량정보입력</span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-201</span></li>
            <li className="file"><span>mypage/dealerSell02_03</span></li>
            <li className="progress">{createProgress(80)}</li>
            <li className="link"><Link href="/mypage/dealerSell02_03"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>가격및차량소개</span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-202</span></li>
            <li className="file"><span>mypage/dealerSell02_04</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerSell02_04"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>성능점검</span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-203</span></li>
            <li className="file"><span>mypage/dealerSell02_05</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerSell02_05"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>차량사진등록</span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-204</span></li>
            <li className="file"><span>mypage/dealerSell02_06</span></li>
            <li className="progress">{createProgress(50)}</li>
            <li className="link"><Link href="/mypage/dealerSell02_06"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>결제</span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-205</span></li>
            <li className="file"><span>mypage/dealerSell02_07</span></li>
            <li className="progress">{createProgress(50)}</li>
            <li className="link"><Link href="/mypage/dealerSell02_07"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>등록완료</span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-206</span></li>
            <li className="file"><span>mypage/dealerSell02_08</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerSell02_08"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>나의설명글관리</span></li>
            <li><span>나의설명글관리</span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-300</span></li>
            <li className="file"><span>mypage/dealerSell03</span></li>
            <li className="progress">{createProgress(80)}</li>
            <li className="link"><Link href="/mypage/dealerSell03"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>나의설명글등록</span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-302</span></li>
            <li className="file"><span>mypage/dealerSell03_01</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerSell03_01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>나의설명글수정</span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-302</span></li>
            <li className="file"><span>mypage/dealerSell03_02</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerSell03_02"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>홈서비스 예약/판매 현황</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-400</span></li>
            <li className="file"><span>mypage/dealerSell04</span></li>
            <li className="progress">{createProgress(70)}</li>
            <li className="link"><Link href="/mypage/dealerSell04"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>보증차량 판매현황</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-401</span></li>
            <li className="file"><span>mypage/dealerSell05</span></li>
            <li className="progress">{createProgress(10)}</li>
            <li className="link"><Link href="/mypage/dealerSell05"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>Live Studio 촬영예약</span></li>
            <li><span>메인</span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-500</span></li>
            <li className="file"><span>mypage/dealerSell06</span></li>
            <li className="progress">{createProgress(60)}</li>
            <li className="link"><Link href="/mypage/dealerSell06"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>Live Studio 촬영예약신청</span></li>
            <li><span></span></li>
            <li><span>IA-MD-SC-502</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>내차 사기</span></li>
            <li><span>24시간 실시간 비교견적</span></li>
            <li><span>비교견적 리스트</span></li>
            <li><span></span></li>
            <li><span>IA-MD-BC-001</span></li>
            <li className="file"><span>mypage/dealerBuy01</span></li>
            <li className="progress">{createProgress(70)}</li>
            <li className="link"><Link href="/mypage/dealerBuy01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>비교견적 상세</span></li>
            <li><span></span></li>
            <li><span>IA-MD-BC-003</span></li>
            <li className="file"><span>mypage/dealerBuy01_01</span></li>
            <li className="progress">{createProgress(70)}</li>
            <li className="link"><Link href="mypage/dealerBuy01_01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 차량이미지 컴포넌트 변경</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>오토옥션 이용현황</span></li>
            <li><span>경매회원 안내</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-MD-AU-001</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>약관동의</span></li>
            <li><span></span></li>
            <li><span>IA-MD-AU-002</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>본인인증</span></li>
            <li><span></span></li>
            <li><span>IA-MD-AU-003</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>개인정보입력</span></li>
            <li><span></span></li>
            <li><span>IA-MD-AU-004</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>회원가입 완료</span></li>
            <li><span></span></li>
            <li><span>IA-MD-AU-005</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>서류심사중</span></li>
            <li><span></span></li>
            <li><span>IA-MD-AU-006</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>가입 승인중</span></li>
            <li><span></span></li>
            <li><span>IA-MD-AU-008</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>가입완료</span></li>
            <li><span></span></li>
            <li><span>IA-MD-AU-009</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>가입정보</span></li>
            <li><span></span></li>
            <li><span>IA-MD-AU-010</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>탈퇴현황</span></li>
            <li><span></span></li>
            <li><span>IA-MD-AU-011</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>회원정보 관리</span></li>
            <li><span>회원정보/소개 관리</span></li>
            <li><span>회원정보</span></li>
            <li><span></span></li>
            <li><span>IA-US-UM-001</span></li>
            <li className="file"><span>mypage/dealerMember01</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>회원정보 PW</span></li>
            <li><span></span></li>
            <li><span>IA-US-UM-003</span></li>
            <li className="file"><span>mypage/dealerMember01_01</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember01_01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>회원정보 수정</span></li>
            <li><span></span></li>
            <li><span>IA-US-UM-004</span></li>
            <li className="file"><span>mypage/dealerMember01_02</span></li>
            <li className="progress">{createProgress(80)}</li>
            <li className="link"><Link href="/mypage/dealerMember01_02"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>비밀번호 변경 PW</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li className="file"><span>mypage/dealerMember01_03</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember01_03"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>비밀번호 변경</span></li>
            <li><span></span></li>
            <li><span>IA-US-UM-006</span></li>
            <li className="file"><span>mypage/dealerMember01_04</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember01_04"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>회원탈퇴 PW</span></li>
            <li><span></span></li>
            <li><span>IA-US-UM-009</span></li>
            <li className="file"><span>mypage/dealerMember01_05</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember01_05"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>회원탈퇴</span></li>
            <li><span></span></li>
            <li><span>IA-US-UM-010</span></li>
            <li className="file"><span>mypage/dealerMember01_06</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember01_06"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li>
              <div className="btn-tooltip">
                <Tooltip placement="bottom" width={250} event="click">
                  <TooltipItem>
                    <span>Click me : )</span>
                  </TooltipItem>
                  <TooltipCont half={true}>
                    <div className="work-exp">
                      <p>- 탈퇴하기 클릭 시 상태별 팝업(주석처리)</p>
                    </div>
                  </TooltipCont>
                </Tooltip>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>차량 판매 후기 관리</span></li>
            <li><span>후기 리스트</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li className="file"><span>mypage/dealerMember02</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember02"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>후기 등록</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li className="file"><span>mypage/dealerMember02_01</span></li>
            <li className="progress">{createProgress(80)}</li>
            <li className="link"><Link href="/mypage/dealerMember02_01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>딜러정보 관리</span></li>
            <li><span>딜러 리스트</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li className="file"><span>mypage/dealerMember03</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember03"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>딜러 상세</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li className="file"><span>mypage/dealerMember03_01</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember03_01"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>딜러 상세 수정</span></li>
            <li><span></span></li>
            <li className="file"><span>mypage/dealerMember03_02</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="/mypage/dealerMember03_02"><a className="link-btn on" target="_blank">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span>매매가이드</span></li>
            <li><span>EW상품</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-CM-UG-001</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>구매가이드</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-CM-UG-002</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>판매가이드</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-CM-UG-003</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>이용권 안내</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-CM-UG-004</span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span>이벤트</span></li>
            <li><span>진행중인 이벤트</span></li>
            <li><span>진행중인 이벤트<br />종료된 이벤트</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-CM-ET-001</span></li>
            <li className="file"><span>event/eventList</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/event/eventList"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>진행중인 이벤트 상세<br />종료된 이벤트 상세</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-CM-ET-002</span></li>
            <li className="file"><span>event/eventView</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/event/eventView"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>포인트 제휴몰</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li className="file"><span></span></li>
            <li className="progress">{createProgress(0)}</li>
            <li className="link"><Link href=""><a className="link-btn before" target="_blank">작업전</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span>고객센터</span></li>
            <li><span>공지사항</span></li>
            <li><span>목록</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-CM-CC-001</span></li>
            <li className="file"><span>customer/noticeList</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/customer/noticeList"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>상세</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-CM-CC-002</span></li>
            <li className="file"><span>customer/noticeView</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/customer/noticeView"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>1:1 상담</span></li>
            <li><span>메인</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-CM-CC-003</span></li>
            <li className="file"><span>customer/inquiry</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/customer/inquiry"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span></span></li>
            <li><span>1:1 상담 작성</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-CM-CC-003</span></li>
            <li className="file"><span>customer/inquiryWrite</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/customer/inquiryWrite"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li><span></span></li>
            <li><span>FAQ</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-CM-CC-005</span></li>
            <li className="file"><span>customer/faq</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/customer/faq"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li> {/* 로그인/회원가입 */}
          <ul className="row">
            <li className="nbd"><span>로그인/회원가입</span></li>
            <li><span>회원가입</span></li>
            <li><span>회원선택</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-US-SI-001</span></li>
            <li className="file"><span>member/memberHome</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/member/memberHome"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>일반회원 약관동의</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-US-SI-002</span></li>
            <li className="file"><span>member/memberStep01</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="/member/memberStep01"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>본인인증</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-US-SI-003</span></li>
            <li className="file"><span>member/memberStep02</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="member/memberStep02"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>일반회원</span></li>
            <li><span>가입정보 입력</span></li>
            <li><span></span></li>
            <li><span>IA-US-SI-004</span></li>
            <li className="file"><span>member/memberStep03</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="member/memberStep03"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>가입완료</span></li>
            <li><span></span></li>
            <li><span>IA-US-SI-005</span></li>
            <li className="file"><span>member/memberStep04</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="member/memberStep04"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>딜러회원</span></li>
            <li><span>가입정보 입력</span></li>
            <li><span></span></li>
            <li><span>IA-US-SI-008</span></li>
            <li className="file"><span>member/dealerStep01</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="member/dealerStep01"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>가입완료</span></li>
            <li><span></span></li>
            <li><span>IA-US-SI-010</span></li>
            <li className="file"><span>member/dealerStep02</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="member/dealerStep02"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>단체회원</span></li>
            <li><span>가입정보 입력</span></li>
            <li><span></span></li>
            <li><span>IA-US-SI-011</span></li>
            <li className="file"><span>member/groupStep01</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="member/groupStep01"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>가입완료</span></li>
            <li><span></span></li>
            <li><span>IA-US-SI-012</span></li>
            <li className="file"><span>member/groupStep02</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="member/groupStep02"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>제휴회원</span></li>
            <li><span>가입정보 입력</span></li>
            <li><span></span></li>
            <li><span>IA-US-SI-013</span></li>
            <li className="file"><span>member/allyStep01</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="member/allyStep01"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>가입완료</span></li>
            <li><span></span></li>
            <li><span>IA-US-SI-014</span></li>
            <li className="file"><span>member/allyStep02</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="member/allyStep02"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span>로그인</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-US-LI-001</span></li>
            <li className="file"><span>member/login</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="member/login"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>휴면해제</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-US-LI-003</span></li>
            <li className="file"><span>member/loginState01</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="member/loginState01"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>비밀번호 변경</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-US-LI-004</span></li>
            <li className="file"><span>member/loginState02</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="member/loginState02"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>증사원증 만료 안내</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-US-LI-006</span></li>
            <li className="file"><span>member/loginState03</span></li>
            <li className="progress">{createProgress(100)}</li>
            <li className="link"><Link href="member/loginState03"><a className="link-btn" target="_blank">완료</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
        <li>
          <ul className="row">
            <li className="nbd"><span></span></li>
            <li><span></span></li>
            <li><span>아이디/비밀번호 찾기</span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span>IA-US-LI-010</span></li>
            <li className="file"><span>member/loginInfo</span></li>
            <li className="progress">{createProgress(90)}</li>
            <li className="link"><Link href="member/loginInfo"><a className="link-btn on" target="_blank on">작업중</a></Link></li>
            <li><span></span></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Index