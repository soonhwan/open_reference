import styled from 'styled-components'

export const BottomNavWrap = styled.div`
  #bottom_nav { position: fixed; bottom: 0; left: 0; width: 100%; z-index: 12; transition: all 0.3s; }

  #bottom_nav.men_nav ul { background: url("//static.wconcept.co.kr/mobile/images/common/BG_bnb_men_black_l.png") bottom right no-repeat; background-size: 800px auto; }

  #bottom_nav.women_nav ul { background: url("//static.wconcept.co.kr/mobile/images/common/BG_bnb_women_white_l.png") bottom right no-repeat; background-size: 800px auto; }

  #bottom_nav ul:after { display: block; clear: both; content: ''; }

  #bottom_nav ul li { width: 19.2%; float: left; overflow: hidden; position: relative; }

  #bottom_nav ul li .nav_item { display: block; width: 100%; height: 50px; position: relative; -webkit-tap-highlight-color: transparent; }

  #bottom_nav ul li .nav_item:before { content: ''; display: block; width: 100%; height: 100%; background-position: center top; background-color: transparent; background-repeat: no-repeat; -webkit-background-size: contain; background-size:contain; }

  #bottom_nav ul li .nav_item .notice_label { display: block; min-width: 5px; height: 5px; background-color: #fa5500; -webkit-border-radius: 50%; -moz-border-radius: 50%; border-radius: 50%; position: absolute; top: 14px; left: 50%; margin-left: 13px; }

  #bottom_nav.men_nav ul li.bottom_nav_home .nav_item:before { background-image: url("//static.wconcept.co.kr/mobile/images/common/ico_bnb_home.png"); }

  #bottom_nav.men_nav ul li.bottom_nav_history .nav_item:before { background-image: url("//static.wconcept.co.kr/mobile/images/common/ico_bnb_history.png"); }

  #bottom_nav.men_nav ul li.bottom_nav_myheart .nav_item:before { background-image: url("//static.wconcept.co.kr/mobile/images/common/ico_bnb_myheart.png"); }

  #bottom_nav.men_nav ul li.bottom_nav_mypage .nav_item:before { background-image: url("//static.wconcept.co.kr/mobile/images/common/ico_bnb_mypage.png"); }

  #bottom_nav.women_nav ul li.bottom_nav_home .nav_item:before { background-image: url("//static.wconcept.co.kr/mobile/images/common/ico_bnb_home_b.png"); }

  #bottom_nav.women_nav ul li.bottom_nav_history .nav_item:before { background-image: url("//static.wconcept.co.kr/mobile/images/common/ico_bnb_history_b.png"); }

  #bottom_nav.women_nav ul li.bottom_nav_myheart .nav_item:before { background-image: url("//static.wconcept.co.kr/mobile/images/common/ico_bnb_myheart_b.png"); }

  #bottom_nav.women_nav ul li.bottom_nav_mypage .nav_item:before { background-image: url("//static.wconcept.co.kr/mobile/images/common/ico_bnb_mypage_b.png"); }

  #bottom_nav .bottom_nav_gender { position: absolute; right: 20px; bottom: 7px; width: 60px; height: 60px; }

  #bottom_nav .bt_shadow { display: none; position: absolute; right: 20px; bottom: 7px; width: 60px; height: 60px; box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3); border-radius: 50%; z-index: -1; }

  #bottom_nav .bottom_nav_gender a.nav_item { display: block; height: 100%; border-radius: 50%; }

  #bottom_nav .bottom_nav_gender a.nav_item:before { content: ''; display: block; width: 100%; height: 100%; }

  #bottom_nav .bottom_nav_women a.nav_item:before { background: url("//static.wconcept.co.kr/mobile/images/common/ico_bnb_women_new.png") no-repeat; background-size: cover; }

  #bottom_nav .bottom_nav_men a.nav_item:before { background: url("//static.wconcept.co.kr/mobile/images/common/ico_bnb_men_new.png") no-repeat; background-size: cover; }

  #bottom_nav.iPhoneXapp:after { display: block; content: ""; position: absolute; bottom: 0; left: 0; width: 100%; height: 30px; }

  #bottom_nav.iPhoneXapp.women_nav:after { background: #fff; }

  #bottom_nav.iPhoneXapp.men_nav:after { background: #000; }

  #bottom_nav.iPhoneXapp ul { margin-bottom: 30px; }

  #bottom_nav.iPhoneXapp .bottom_nav_gender,
  #bottom_nav.iPhoneXapp .bt_shadow { bottom: 37px; }

  @media (min-width: 800px) {
    #bottom_nav.men_nav ul li { background-color: #000; }
    #bottom_nav.women_nav ul li { background-color: #fff; }
  }

  @media (max-width: 375px) {
    #bottom_nav ul li .nav_item { height: 13.333vw; }

    #bottom_nav.men_nav ul, 
    #bottom_nav.women_nav ul { background-size: 213.33vw auto; }

    #bottom_nav .bt_shadow, 
    #bottom_nav .bottom_nav_gender { right: 5.333vw; width: 16vw; height: 16vw; bottom: 1.866666666666667vw; }

    #bottom_nav .bt_shadow { box-shadow: 0 2.666vw 5.333vw 0 rgba(0, 0, 0, 0.3); }
  }
`;