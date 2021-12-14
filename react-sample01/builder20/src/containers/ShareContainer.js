import React, { memo } from 'react';
import { useCallback, useSelector, useDispatch, useReactRouter } from 'hooks';
import { LinkRenderer } from 'components';
import * as baseActions from 'store/modules/base';

const ShareContainer = (props) => {
  const dispatch = useDispatch()
  const { 
    productDetail, // 상세정보 -- detailTop
    commentTotalCount, // 댓글 현재 카운터
    favoriteCnt
  } = useSelector(state => state.detail);
  const { location, match } = useReactRouter();
  const { channelId } = match?.params;

  const commentCount = commentTotalCount // 상품에 대한 총 댓글 수
  const favoriteCount = favoriteCnt // 상품에 대한 좋아요 총 수

  const copyUrlToClipboard = (URl) => {
    var input = document.createElement('input');
    var copyUrl = URl;
    document.body.appendChild(input);
    input.value = copyUrl;
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('URL이 클립보드에 복사되었습니다'); 
  }

  const sendSNS = useCallback((name, href) => {
    if (name !== 'kakao') {
      window.open(href, '_blank');
      //$(location).attr('href', href);
    }
  }, [])

  const shareFacebook = useCallback((msg, img, url, fbAppId) => {
    const templUrl = 'https://m.onestorebooks.co.kr/' // 임시 url
    const href = 'http://m.facebook.com/sharer.php?' + 
    'app_id=' + fbAppId + 
    //'&link=' + encodeURIComponent(templUrl) + 
    '&u=' + encodeURIComponent(templUrl) + 
    '&caption=' + encodeURIComponent(msg) + 
    '&picture=' + encodeURIComponent(img) + 
    '&redirect_uri=' + encodeURIComponent('http://www.facebook.com/');
    sendSNS('facebook', href);
  }, [sendSNS])

  const shareKakaotalk = useCallback((msg, img, desc, url) => { //카카오톡, 페이스북 공유 코드 dependancy로 분할 해야할 것 같습니다 추후 진행하겠습니다

    if (window.Kakao === undefined) { // window.Kakao === undefined이면 모바일로 간주하겠습니다
      alert('카카오톡 보내기는 모바일에서만 사용 가능합니다.');

      // dim 유지 하면서 메세지 창 전환
      //ns.fnPopupClose('sharing', 'bounceIn', false);
      //ns.showAlertPopup('카카오톡 보내기는 모바일에서만 사용 가능합니다.');
      return false;
    } else {

      var imgWidth = 300;
      var imgHeight = 300;
      
      /* 2018.06.25일 이후 버전 */
      var templateArgs;
      var profile;

      // 글자수 제한 체크 - 너무 많이 전달 시 에러 발생 (기준이 없어 임의의 제한 지정 300자) - 예상으로는 1000자 이지만 바이트 체크에 의해 에러 발생할 수 있어 감소 처리
      desc = ('' + desc).replace(/\t|\n/gm, '');
      if (desc.length > 300) {
        desc = desc.substr(0, 300);
      }

      if (location.pathname !== '/detail') {
        if (location.pathname.indexOf('/marketingEvent') > -1) {
          imgWidth = 720;
          imgHeight = 360;
        }
      // 기본 공유하기
      /* jshint ignore:start */
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: msg,
          description: desc,
          imageUrl: img,
          link: {
            mobileWebUrl: url,
            webUrl: url
          },
          imageWidth: imgWidth,
          imageHeight: imgHeight
        },
        buttons: [
          {
            title: '자세히 보기',
            link: {
              mobileWebUrl: url,
              webUrl: url
            }
          }
        ]
      }).catch(function(e) {
        //ns.webLog('exception', 'Kakao', '[' + e.name + '][' + msg + '] ' + e.message, 1)
      });
      /* jshint ignore:end */
    } else {
      // kakao link v2 custom template 사용 시 domain 정보가 지정되어 있고, domain을 자동 포함시켜 전송하면 안된다
      url = '' + location.pathname + location.search;
      if (url.indexOf('/') === 0) {
        url = url.replace('/', '');
      }

      templateArgs = {
        title: msg,
        desc: desc,
        url: url,
        image: img,
        imageWidth: imgWidth,
        imageHeight: imgHeight,
        buttonTitle: '자세히 보기'
      };

      // 작가 정보가 있을 경우 profile 추가
      if (productDetail.length > 0) {
        profile = ('' + productDetail.text()).replace(/\t|\n/gm, '');
      // 기준이 없어 임의의 제한 지정 80자, 예상으로는 100자 이지만 바이트 체크에 의해 에러 발생할 수 있어 감소 처리
      if (profile.length > 80) {
        profile = profile.substr(0, 80);
      }
      templateArgs.profile = profile;
      //templateArgs.profileIcon = 'https://m.onestorebooks.co.kr/resources/nbook10/images/nbooks/icon/bg_icon_01.png';
    }

      // 좋아요, 댓글, 보기/다운 횟수 정보가 있을 경우 social 추가
      if (favoriteCount.length > 0) {
        templateArgs.likeCount = favoriteCount;
      }
      if (commentCount.length > 0) {
        templateArgs.commentCount = commentCount;
      }
      if (favoriteCount.length > 0) {
        templateArgs.viewCount = favoriteCount;
      }

      // 커스텀 템플릿으로 공유하기 - 상세화면 전용
      /* jshint ignore:start */
      window.Kakao.Link.sendCustom({
        templateId: 10652,
        templateArgs: templateArgs
      }).catch(function(e) {
        //ns.webLog('exception', 'Kakao', '['+ e.name + '][' + msg + '] ' + e.message, 1);
      });
      /* jshint ignore:end */
    }
      
      /* 2018.06.25일 이전 버전 
      window.Kakao.Link.sendTalkLink({
      label: msg+"\n"+desc+"\n\n"+url,
      image: {
      src: img,
      width : imgWidth,
      height : imgHeight
      }
      });
      */
      
      /*
      else {
      // dim 유지 하면서 메세지 창 전환
      ns.fnPopupClose('sharing','bounceIn', false);
      ns.showAlertPopup('카카오톡 보내기는 모바일에서만 사용 가능합니다.');
      }
      */
    }
  }, [commentCount, favoriteCount, location.pathname, location.search, productDetail]);
  
  const openPopup = useCallback((name) => {
    let popupInfo;
    if (name === 'share') {
      popupInfo = {
        mode: 'share',
        title: '공유하기',
        snsShares: [
          { snsNm: 'kakaotalk', snsName: '카카오톡' },
          { snsNm: 'facebook', snsName: '페이스북' },
          { snsNm: 'link', snsName: '링크 복사' },
        ],
        firstBtnNm: '확인',
        onEvent: (eventName, state, event) => {
          if (eventName === 'click_Popup_shareBtn') {
            if (state === 'kakaotalk') {
              console.log('!!! 카카오톡 공유 API 호출');
              shareKakaotalk(productDetail.snsProdNm, productDetail.snsFilePos, productDetail.prodDesc, document.URL + '/' + channelId)
            } else if (state === 'facebook') {
              console.log('!!! 페이스북 공유 API 호출', window.Kakao);
              const fbAppId = '875368495909356'
              shareFacebook(productDetail.snsProdNm, productDetail.snsFilePos, productDetail.orgFilePos, fbAppId)
            } else if (state === 'link') {
              console.log('!!! URL 공유', document.URL);
              copyUrlToClipboard(document.URL);
              // URL 복사 선택 시 아래 토스트 팝업 실행
              dispatch(baseActions.addToast({
                type: 'bot',
                text: '복사되었습니다.'
              }))
            }
          }
        }
      }
    }
    dispatch(baseActions.openPopup(popupInfo))
  }, [channelId, dispatch, productDetail.orgFilePos, productDetail.prodDesc, productDetail.snsFilePos, productDetail.snsProdNm, shareFacebook, shareKakaotalk]);

  const handleEvent = useCallback((eventName, eventData, event) => {
    switch (eventName) {
      case 'click_TextButton_sharingBlack': openPopup('share'); break
    }
  }, [openPopup]);

  const param = {
    mode: 'icontext',
    btnClass: 'btnDetailUtil',
    size: 'B14',
    color: 'Drak',
    textClass: 'DetailUtilText',
    iconsize: 24,
    multiEvent: true,
    prevEvent: props.prevEvent,
    onEvent: handleEvent
  }
  return (
    <LinkRenderer {...param} icon="sharingBlack">공유하기</LinkRenderer>
  )
}

export default memo(ShareContainer)
