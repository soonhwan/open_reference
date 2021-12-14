/*
// 신규 정의
// 1. 리스트 (채널 상품)

// 상품 기본 정보 (salesStatusCd 는 무조건 판매중)
String prodId;              // 상품 ID (채널 id, 에피소드 id, 이용권 id)
String prodNm;              // 상품 이름
String gradeCd;             // 등급정보(구.prodGrdCd) : PD004401(전체이용가), PD004404(청소년 이용불가)
String plus19Yn = "N";      // 19+ 상품여부
String topMenuId;            // 탑 카테고리 코드(=topMenuId) : DP00(ALL), DP13(이북), DP14(만화), DP26(웹툰), DP29(웹소설), DP31(오디오북)
String metaClsfCd;          // 메타 코드(책 유형) : CT19(이북단편), CT21(만화단행/연재), CT22(만화잡지), CT24(이북잡지), CT27(웹툰), CT29(웹소설), CT38(오디오북단편), CT39(오디오북시리즈)
String bookClsfCd;          // 단행 연재 구분 코드(=bookType) : DP004301(단행), DP004302(연재), DP004305(단행+연재)

// 상품 썸네일 정보
String thumbnailImageUrl;   // 썸네일 이미지 주소 (구. 원본경로 -> 도메인 + 파일 사이즈 정보 포함 경로)
String thumbnailType;       // 썸네일 타입 : rectangle(직사각형), square(정사각형)
String badgeNm;             // 뱃지 명칭
String setProdYn = "N";     // 세트 상품 여부
String bookpassYn = "N";    // 북 패스 상품 여부

// 상품 전시 정보
String artistNm;            // 작가명(최대 3명까지 노출)
String artistNmSub;         // 추가 작가명 정보 : 번역가(이북), 그림작가(만화), 낭독자(오디오북)
String publisherNm;         // 출판사명

String bookUnit;            // 책 단위(권, 회, 화, 호)
//int bookCount;              // (단행) 전체 건수
//int serialCount;            // (연재) 전체 건수 // TODO. 향후 단행+연재 케이스는 운영하지 않으므로 episodeCount(totalCount?) 로 통칭해서 하나만 사용해도 되지 않나? (오디오북은 챕터 미표기)
int totalCount;             // 총(에피소드) 건수
String completedYn;         // 연재완료 여부(=status) : Y/N 구.completed(연재완료), continue(미완결)
String weekDayNm;           // 연재 요일명 (연재중이고, weekDayCdName 값이 없을때 "자유연재")

double avgScore;            // 평균 평점(별점)
int commentCount;           // 댓글 수
String regDt;               // 최신등록일 (YYYY.MM.DD)
String audiobookTypeNm;     // 오디오북 타입 이름 PD013601("완독"), PD013602("요약"), PD013603("드라마"), PD013604("부분극화"), PD013605("강연"), PD013606("어학")

++++++ 부가정보

// 이하 상품 상세 
// 받은 선물
// 보낸 선물
// 구매 내역
// ....


// 추가. 에피소드 정보
String salesStatusCd;       // 판매상태 코드 : PD000403(판매중), PD000404(판매중지), PD000409(판매불가-다운허용), PD000410(해지 요청-다운로드 가능)


// 추가. 채널 정보 

*/



// storybook에서 사용하기 위한 데이터
const ebook = require('./ebook.js');
const audiobook = require('./audiobook.js');
const comic = require('./comic.js');
const webtoon = require('./webtoon.js');
const webnovel = require('./webnovel.js');

// general, fantasy, romance, set
const defaultList = [
	ebook.getProduct('general'), 
	ebook.getProduct('fantasy'), 
	ebook.getProduct('romance'), 
	ebook.getProduct('set'), 
	audiobook, 
	comic, 
	webtoon, 
	webnovel
]

function getObject(options) {
	// ebook(general, fantasy, romance, set), audiobook, comic, webtoon, webnovel
	switch(options) {
		case 'general' : return ebook.getProduct('general'); break;
		case 'fantasy' : return ebook.getProduct('fantasy'); break;
		case 'romance' : return ebook.getProduct('romance'); break;
		case 'set' : return ebook.getProduct('set'); break;
		case 'audiobook' : return audiobook; break;
		case 'comic' : return comic; break;
		case 'webtoon' : return webtoon; break;
		case 'webnovel' : return webnovel; break;
	}

	return ebook.getProduct('general')
}

function getList(options, count) {
	const list = []
	const len = defaultList.length
	for (var i = 0; i < count; i++) {
		list.push(defaultList[i % len])
	}
	return list
}

module.exports = {
	getObject: getObject,
	getList: getList,
};





  







