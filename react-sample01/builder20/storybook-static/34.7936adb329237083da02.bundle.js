(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1404:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var C_work_react_sample01_builder20_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),store_modules_base__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(32),store_modules_search_searchUnified__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(581),store_modules_search_searchAutoComplete__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(580),query_string__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(269),query_string__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_8__),_constants__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(12),orderByList=[{value:"accuracy",text:"정확도순"},{value:"popular",text:"인기순"},{value:"recent",text:"최신순"}],groupMenuList=[{text:"전체",value:null},{text:"웹소설",value:"WEBNOVEL"},{text:"웹툰",value:"WEBTOON"}];__webpack_exports__.default=function SearchPage(props){var dispatch=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.c)(),_useReactRouter=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.g)(),history=_useReactRouter.history,location=_useReactRouter.location,query=(_useReactRouter.match,query_string__WEBPACK_IMPORTED_MODULE_8___default.a.parse(location.search)),searchQuery=query.searchQuery||"테스트";console.log("searchPage query : ",searchQuery),Object(hooks__WEBPACK_IMPORTED_MODULE_2__.d)((function(){var param={type:query.type||null,group:query.group||null};dispatch(store_modules_base__WEBPACK_IMPORTED_MODULE_5__.setScreenLoading(!0)),dispatch(store_modules_search_searchUnified__WEBPACK_IMPORTED_MODULE_6__.getSearchUnified(searchQuery,param)).then((function(res){dispatch(store_modules_base__WEBPACK_IMPORTED_MODULE_5__.setScreenLoading(!1))}))}),[dispatch,query.group,query.type,searchQuery]),Object(hooks__WEBPACK_IMPORTED_MODULE_2__.d)((function(){dispatch(store_modules_search_searchAutoComplete__WEBPACK_IMPORTED_MODULE_7__.getSearchAutoComplete(searchQuery))}),[dispatch,searchQuery]);var searchUnified=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.j)((function(state){return{searchUnified:state.searchUnified}})).searchUnified,searchAutoComplete=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.j)((function(state){return{searchAutoComplete:state.searchAutoComplete}})).searchAutoComplete;console.log("searchPage reduxData : ",searchUnified),console.log("searchPage autoComplete reduxData : ",searchAutoComplete);var mainType=null!==location.pathname.match("bookpass")?"pass":"books",_useState=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.k)(utils__WEBPACK_IMPORTED_MODULE_4__.default.isEmpty(query.group)?null:query.group),_useState2=Object(C_work_react_sample01_builder20_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),groupID=_useState2[0],setGroupID=_useState2[1],_useState3=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.k)(utils__WEBPACK_IMPORTED_MODULE_4__.default.isEmpty(query.orderBy)?"accuracy":query.orderBy),_useState4=Object(C_work_react_sample01_builder20_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),orderByID=_useState4[0],setOrderByID=_useState4[1];Object(hooks__WEBPACK_IMPORTED_MODULE_2__.e)((function(){function onScroll(){window.pageYOffset+document.documentElement.clientHeight>document.documentElement.scrollHeight-300&&console.log("onScroll")}return window.addEventListener("scroll",onScroll),function(){window.removeEventListener("scroll",onScroll)}}),[]);var changeCategory=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.b)((function(eventData){console.log("EVENT ::: changeCategory = ",eventData);var isPass="pass"===mainType?"/bookpass":"";null===eventData.value?history.replace("/search".concat(isPass)):history.replace("/search".concat(isPass,"?group=").concat(eventData.value)),setGroupID(eventData.value),setOrderByID("accuracy")}),[history,mainType]),changeSort=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.b)((function(eventData){console.log("EVENT ::: changeSort = ",eventData);var isPass="pass"===mainType?"/bookpass":"";history.replace("/search".concat(isPass,"?orderBy=").concat(eventData.value)),setOrderByID(eventData.value)}),[history,mainType]),clickSubHeaderTitle=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.b)((function(eventData){console.log("EVENT ::: clickSubHeaderTitle = ",eventData)}),[]),clickItemRenderer=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.b)((function(eventData){console.log("EVENT ::: clickItemRenderer = ",eventData.prodId)}),[]),clickTotalSearch=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.b)((function(eventData){console.log("EVENT ::: clickTotalSearch")}),[]),handleEvent=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.b)((function(eventName,eventData,event){switch(console.log("EVENT ::: handleEvent = ",eventName,eventData,event),eventName){case"change_PrimaryBar":changeCategory(eventData);break;case"change_SortingBar_item":changeSort(eventData);break;case"click_SubHeaderTitle":clickSubHeaderTitle(eventData);break;case"click_ItemRenderer":clickItemRenderer(eventData);break;case"click_ListNoResults_TotalSearch":case"click_ListMoreBtn_TotalSearch":clickTotalSearch()}}),[changeCategory,changeSort,clickItemRenderer,clickSubHeaderTitle,clickTotalSearch]),getLnb=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.b)((function(title){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__.Lnb,{lnbTitle:title})}),[]),getPrimaryBar=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.b)((function(){if(searchUnified.searchResult.length>1)return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__.PrimaryBar,{mode:"landingNav",itemList:groupMenuList,selectedItemValue:groupID,onEvent:handleEvent})}),[groupID,handleEvent,searchUnified.searchResult]),getSortingBar=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.b)((function(title){return null===groupID&&searchUnified.searchResult.length>1?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__.SubHeader,{mode:"link",title:title,onEvent:handleEvent}):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__.SortingBar,{mode:"basic",title:title,itemList:orderByList,selectedItemValue:orderByID,onEvent:handleEvent})}),[groupID,handleEvent,orderByID,searchUnified.searchResult]),getList=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.b)((function(list){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__.List,{mode:"list",itemRenderer:"search1Row",infoList:list,onEvent:handleEvent,keyword:searchQuery})}),[handleEvent,searchQuery]),getListRender=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.b)((function(){if(null===groupID&&searchUnified.searchResult.length>1)return searchUnified.searchResult.map((function(v,i){var productList=v.productList.filter((function(v,i){return i<4}));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{key:v.topMenuId},getSortingBar("".concat(v.groupNm," ").concat(v.productList.length,"개")),getList(productList))}));if(null===groupID&&""!==searchUnified.searchResult[0].group)setGroupID(searchUnified.searchResult[0].group);else{var group=searchUnified.searchResult.filter((function(v){return v.group===groupID}));if(group.length>0){var productList=group[0].productList.filter((function(v,i){return i<30}));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,getSortingBar("".concat(group[0].groupNm," ").concat(group[0].productList.length,"개")),getList(productList))}}}),[getList,getSortingBar,groupID,searchUnified.searchResult]),getSearchPageRender=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.b)((function(){return searchUnified.searchResult.length>0?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,getLnb("".concat(searchQuery," 검색결과 ").concat(searchUnified.totalSearchCount,"개")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,getPrimaryBar(),getListRender()),"pass"===mainType&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__.SearchBottomBtn,{mode:"basic",moreBtn:"통합검색결과 더보기",onEvent:function onEvent(){handleEvent("click_ListMoreBtn_TotalSearch")}})):searchUnified.isLoading?null:react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,getLnb("".concat(searchQuery," 검색결과 ").concat(searchUnified.totalSearchCount,"개")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__.ListNoResults,{mode:"basic",thumb:"/static/images/thumb/list_no_results_01.png",title:"pass"===mainType?"북패스 내 <b>".concat(searchQuery,"</b> 검색결과가 없습니다."):"<b>".concat(searchQuery,"</b> 검색결과가 없습니다."),summary:"다른 검색어를 입력하거나<br />철자와 띄어쓰기를 확인해 보세요.",moreBtn:"pass"===mainType?"통합검색결과 더보기":null,onEvent:handleEvent}))}),[getListRender,getLnb,getPrimaryBar,handleEvent,mainType,searchQuery,searchUnified]),helmet=Object(hooks__WEBPACK_IMPORTED_MODULE_2__.f)((function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__.BooksHelmet,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title",null,"unknown"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta",{name:"keywords",content:"unknown, 북스, 오디오북"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta",{name:"description",content:"할인혜택이 가장 많은 국내 1위 eBook 서비스 도서, 장르소설, 웹소설, 만화, 웹툰을 한곳에서 이용하세요."}))}),[]);return _constants__WEBPACK_IMPORTED_MODULE_9__.logConfig.render&&console.log("%r SearchPage"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__.SubTemplate,{mode:"search"},helmet,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"SearchPage"},getSearchPageRender()))}}}]);
//# sourceMappingURL=34.7936adb329237083da02.bundle.js.map