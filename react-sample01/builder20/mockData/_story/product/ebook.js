
// 단편
const general = {
  "prodId": "H039181124",
  "prodNm": "인간의 척도 인간의 척도 인간의 척도 인간의 척도 인간의 척도 인간의 척도 인간의 척도 인간의 척도 인간의 척도 인간의 척도 인간의 척도",
  "gradeCd": "PD004401",
  "plus19Yn": "N",
  "topMenuId": "DP13",
  "metaClsfCd": "CT19",
  "bookClsfCd": "DP004301",
  "thumbnailImageUrl": "/data7/SMILE_DATA7/IMG/PEBOOKS/202006/17/0040084650/01_0040084650_1335.png",
  "thumbnailType": "rectangle",
  "badgeNm": "",
  "setProdYn": "N",
  "bookpassYn": "N",
  "artistNm": "마르코 말발디",
  "artistNmSub": "김지원",
  "publisherNm": "그린하우스",
  "bookUnit": "권",
  "totalCount": 1,
  "completedYn": "N",
  "weekDayNm": "",
  "avgScore": 4.0,
  "commentCount": 0,
  "regDt": "2020.04.08",
  "audiobookTypeNm": ""
}
const fantasy = {
  "prodId": "H040067375",
  "prodNm": "[고정] 판타지_시단소-남자전설 [단행]",
  "gradeCd": "PD004401",
  "plus19Yn": "N",
  "topMenuId": "DP13",
  "metaClsfCd": "CT20",
  "bookClsfCd": "DP004301",
  "thumbnailImageUrl": "/data7/SMILE_DATA7/IMG/PEBOOKS/202002/12/0040039513/01_0040039513_1049.png",
  "thumbnailType": "rectangle",
  "badgeNm": "",
  "setProdYn": "N",
  "bookpassYn": "Y",
  "artistNm": "K. 석우",
  "artistNmSub": "",
  "publisherNm": "e-온누리",
  "bookUnit": "권",
  "totalCount": 14,
  "completedYn": "Y",
  "weekDayNm": "",
  "avgScore": 4.0,
  "commentCount": 0,
  "regDt": "2020.04.08",
  "audiobookTypeNm": ""
}
// 단편
const romance = {
  "prodId": "H040048132",
  "prodNm": "[고정] 로맨스_단단ALL-2759",
  "gradeCd": "PD004404",
  "plus19Yn": "Y",
  "topMenuId": "DP13",
  "metaClsfCd": "CT19",
  "bookClsfCd": "DP004301",
  "thumbnailImageUrl": "/data7/SMILE_DATA7/IMG/PEBOOKS/202004/03/0040024502/01_0040024502_1743.png",
  "thumbnailType": "rectangle",
  "badgeNm": "",
  "setProdYn": "N",
  "bookpassYn": "Y",
  "artistNm": "호박곰",
  "artistNmSub": "",
  "publisherNm": "피플앤스토리",
  "bookUnit": "권",
  "totalCount": 1,
  "completedYn": "N",
  "weekDayNm": "",
  "avgScore": 1.4,
  "commentCount": 0,
  "regDt": "2020.04.08",
  "audiobookTypeNm": ""
}
// fantasy
const set = {
  "prodId": "H040125869",
  "prodNm": "[고정] 판타지_세단대-믿고 보는 봉감독님 [단행]",
  "gradeCd": "PD004401",
  "plus19Yn": "N",
  "topMenuId": "DP13",
  "metaClsfCd": "CT20",
  "bookClsfCd": "DP004301",
  "thumbnailImageUrl": "/data7/SMILE_DATA7/IMG/PEBOOKS/202004/29/0040084330/01_0040084330_1821.png",
  "thumbnailType": "rectangle",
  "badgeNm": "",
  "setProdYn": "Y",
  "bookpassYn": "N",
  "artistNm": "[이앙]",
  "artistNmSub": "",
  "publisherNm": "로크미디어",
  "bookUnit": "권",
  "totalCount": 3,
  "completedYn": "Y",
  "weekDayNm": "",
  "avgScore": 4.0,
  "commentCount": 0,
  "regDt": "2020.04.08",
  "audiobookTypeNm": ""
}

module.exports = {
  // general, fantasy, romance, set
  getProduct: function(type) {
    switch(type) {
      case 'general' : return general; break;
      case 'fantasy' : return fantasy; break;
      case 'romance' : return romance; break;
      case 'set' : return set; break;
    }
    return general
  }
};