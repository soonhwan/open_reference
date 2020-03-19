import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import AppLayout from '@src/components/layouts/AppLayout';
import CarFilter from '@src/components/common/CarFilter';
import BannerItem from '@src/components/common/banner/BannerItem';
import Button from '@lib/share/items/Button';
import Buttons from '@lib/share/items/Buttons';
import SelectBox from '@lib/share/items/SelectBox';
import Input from '@lib/share/items/Input';
import PageItem from '@lib/share/items/PageItem';
import Pagination from '@lib/share/items/Pagination';
import PageCont from '@lib/share/items/PageCont';
import Textarea from '@lib/share/items/Textarea';
import RodalPopup from '@lib/share/popup/RodalPopup';
import useRodal from '@lib/share/custom/useRodal';
import { SECTION_BUY } from '@src/actions/types';
import { select1_list, car_list } from '@src/dummy';

const CertifyMall = () => {
  const dispatch = useDispatch();
  dispatch({ type: SECTION_BUY });

  const handleBtnClick = useCallback((e, id) => {
    alert(`이 상품의 차량 아이디 값은 ${id}입니다.`);
  }, []);

  const [storePopupShow, setStorePopupShow, openStorePopup, closeStorePopup] = useRodal(false, true);

  return (
    <AppLayout>
      <div className="list-nav-sec">
        <ul className="content-wrap">
          <li><a href="list" tilte="전체차량 리스트 보기"><i className="ico-allcar"></i><span>전체차량</span></a></li>
          <li><a href="liveList" title="라이브스튜디오 리스트 보기"><i className="ico-livestudio"></i><span>라이브스튜디오</span></a></li>
          <li><a href="auctionList" title="경매낙찰차량 리스트 보기"><i className="ico-bid"></i><span>경매낙찰차량</span></a></li>
          <li className="on"><a href="certifyMall" title="인증몰 리스트 보기"><i className="ico-income"></i><span>인증몰</span></a></li>
        </ul>
      </div>
      <div className="content-wrap buy-wrap">
        <div className="list-sec">
          <div className="list-banner certify">
            <p className="tit">브랜드 이미지 배너영역</p>
            <p className="exp">
              브랜드 이미지 배너 서브 텍스트가 노출됩니다.<br />
              브랜드 이미지 배너 서브 텍스트가 노출됩니다.
            </p>
          </div>
          <div className="list-wrap">
            <PageItem min={1} max={3} initNum={1}>
              <div className="list-tit">
                <h4>수입인증<span>수입인증 인증 가이드 텍스트 영역입니다.</span></h4>
                <Pagination />
              </div>
              <PageCont id={1}>
                <ul className="goods-list brand">
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>벤츠</p>
                    </div>
                    <div className="brand-dim">
                      <p>벤츠</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>BMW</p>
                    </div>
                    <div className="brand-dim">
                      <p>BMW</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>아우디</p>
                    </div>
                    <div className="brand-dim">
                      <p>아우디</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>폭스바겐</p>
                    </div>
                    <div className="brand-dim">
                      <p>폭스바겐</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                </ul>
              </PageCont>
              <PageCont id={2}>
                <ul className="goods-list brand">
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>벤츠</p>
                    </div>
                    <div className="brand-dim">
                      <p>벤츠</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>BMW</p>
                    </div>
                    <div className="brand-dim">
                      <p>BMW</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>아우디</p>
                    </div>
                    <div className="brand-dim">
                      <p>아우디</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>폭스바겐</p>
                    </div>
                    <div className="brand-dim">
                      <p>폭스바겐</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                </ul>
              </PageCont>
              <PageCont id={3}>
                <ul className="goods-list brand">
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>벤츠</p>
                    </div>
                    <div className="brand-dim">
                      <p>벤츠</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>BMW</p>
                    </div>
                    <div className="brand-dim">
                      <p>BMW</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>아우디</p>
                    </div>
                    <div className="brand-dim">
                      <p>아우디</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>폭스바겐</p>
                    </div>
                    <div className="brand-dim">
                      <p>폭스바겐</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                </ul>
              </PageCont>
            </PageItem>
          </div>
          <div className="list-wrap">
            <PageItem min={1} max={3} initNum={1}>
              <div className="list-tit">
                <h4>금융사 인증<span>금융사 인증 가이드 텍스트 영역입니다.</span></h4>
                <Pagination />
              </div>
              <PageCont id={1}>
                <ul className="goods-list brand">
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>현대</p>
                    </div>
                    <div className="brand-dim">
                      <p>현대</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>제네시스</p>
                    </div>
                    <div className="brand-dim">
                      <p>제네시스</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>기아</p>
                    </div>
                    <div className="brand-dim">
                      <p>기아</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>르노삼성</p>
                    </div>
                    <div className="brand-dim">
                      <p>르노삼성</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                </ul>
              </PageCont>
              <PageCont id={2}>
                <ul className="goods-list brand">
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>현대</p>
                    </div>
                    <div className="brand-dim">
                      <p>현대</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>제네시스</p>
                    </div>
                    <div className="brand-dim">
                      <p>제네시스</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>기아</p>
                    </div>
                    <div className="brand-dim">
                      <p>기아</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>르노삼성</p>
                    </div>
                    <div className="brand-dim">
                      <p>르노삼성</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                </ul>
              </PageCont>
              <PageCont id={3}>
                <ul className="goods-list brand">
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>현대</p>
                    </div>
                    <div className="brand-dim">
                      <p>현대</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>제네시스</p>
                    </div>
                    <div className="brand-dim">
                      <p>제네시스</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>기아</p>
                    </div>
                    <div className="brand-dim">
                      <p>기아</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>르노삼성</p>
                    </div>
                    <div className="brand-dim">
                      <p>르노삼성</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                </ul>
              </PageCont>
            </PageItem>
          </div>
          <div className="list-wrap">
            <PageItem min={1} max={3} initNum={1}>
              <div className="list-tit">
                <h4>프랜차이즈 인증<span>프랜차이즈 인증 가이드 텍스트 영역입니다.</span></h4>
                <Pagination />
              </div>
              <PageCont id={1}>
                <ul className="goods-list brand">
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>렉서스</p>
                    </div>
                    <div className="brand-dim">
                      <p>렉서스</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>닛산</p>
                    </div>
                    <div className="brand-dim">
                      <p>닛산</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>다이하쓰</p>
                    </div>
                    <div className="brand-dim">
                      <p>다이하쓰</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>닷지</p>
                    </div>
                    <div className="brand-dim">
                      <p>닷지</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                </ul>
              </PageCont>
              <PageCont id={2}>
                <ul className="goods-list brand">
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>렉서스</p>
                    </div>
                    <div className="brand-dim">
                      <p>렉서스</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>닛산</p>
                    </div>
                    <div className="brand-dim">
                      <p>닛산</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>다이하쓰</p>
                    </div>
                    <div className="brand-dim">
                      <p>다이하쓰</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>닷지</p>
                    </div>
                    <div className="brand-dim">
                      <p>닷지</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                </ul>
              </PageCont>
              <PageCont id={3}>
                <ul className="goods-list brand">
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>렉서스</p>
                    </div>
                    <div className="brand-dim">
                      <p>렉서스</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>닛산</p>
                    </div>
                    <div className="brand-dim">
                      <p>닛산</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>다이하쓰</p>
                    </div>
                    <div className="brand-dim">
                      <p>다이하쓰</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                  <li>
                    <div className="brand-item">
                      <div className="img-wrap"></div>
                      <p>닷지</p>
                    </div>
                    <div className="brand-dim">
                      <p>닷지</p>
                      <Button size="full" background="blue80" title="인증중고차 보기" iconType='arrow-white sml' height={60} />
                    </div>
                  </li>
                </ul>
              </PageCont>
            </PageItem>
          </div>
        </div>
      </div>
      <div className="certify-banner">
        <div className="content-wrap">
          <p>오토벨 인증몰 <span>파트너사</span>가 되어보세요</p>
          <Button size="mid" background="blue80" title="입점문의" width={140} marginTop={16} onClick={(e) => openStorePopup(e, "fade")} />
        </div>
      </div>

      <RodalPopup show={storePopupShow} type={'fade'} closedHandler={closeStorePopup} mode="normal" title="인증몰 입점문의" size="small">
        <div className="popup-inquire">
          <div className="inquire-wrap">
            <p className="tit-exp">인증몰 입점에 관하여 궁금한 사항을 보내주시면<br />담당자 확인 후 보다 자세한 상담을 드릴 수 있도록 하겠습니다.</p>
            <form>
              <fieldset>
                <legend className="away">인증몰 입점문의</legend>
                <table summary="인증몰 입점문의에 대한 내용" className="table-tp2">
                  <caption className="away">인증몰 입점문의</caption>
                  <colgroup>
                    <col width="27.5%" />
                    <col width="72.5%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th><label htmlFor="certify">구분</label></th>
                      <td><SelectBox id="certify" className="items-sbox" options={select1_list} width="100%" height={48} /></td>
                    </tr>
                    <tr>
                      <th><label htmlFor="agency-name">회사명</label></th>
                      <td><Input type="text" id="agency-name" /></td>
                    </tr>
                    <tr>
                      <th><label htmlFor="user-name">담당자 성함</label></th>
                      <td><Input type="text" id="user-name" /></td>
                    </tr>
                    <tr>
                      <th><label htmlFor="user-phone">전화번호</label></th>
                      <td>
                        <span className="bridge">
                          <SelectBox id="user-phone" className="items-sbox" options={select1_list} width={119} height={48} />
                        </span>
                        <span className="bridge">
                          <Input type="text" id="user-phone2" width={119} />
                        </span>
                        <Input type="text" id="user-phone3" width={108} />
                      </td>
                    </tr>
                    <tr>
                      <th><label htmlFor="email">이메일 주소</label></th>
                      <td>
                        <Input type="text" id="email" width={168} />
                        <em className="mg8">@</em>
                        <Input type="text" id="email2" width={169} />
                        <span className="bridge2">
                          <SelectBox id="email3" className="items-sbox" options={select1_list} placeHolder="직접입력" width="100%" height={48} />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>문의내용</th>
                      <td><Textarea countLimit={400} type="tp1" height={218} /></td>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
            </form>
            {/* <Buttons align="center" marginTop={20} className="w-line">
              <Button size="big" background="gray" title="취소" width={180} height={60} />
              <Button size="big" background="blue80" title="보내기" width={180} height={60} />
            </Buttons>

            {/* <div className="co-wrap">
              <p>
                <span><i className="ico-document"></i></span>
                인증몰 입점 문의가<br />접수되었습니다.
              </p>
            </div>
            <p className="co-exp">* 빠른 시일안에 담당자가 연락드리겠습니다.</p>
            <Buttons align="center" marginTop={40} className="w-line">
              <Button size="big" background="blue80" title="확인" width={180} height={60} />
            </Buttons> */}
          </div>
          <div className="popup-bottom">
            <p className="tx">메일이 아닌 담당자 직통 전화로도 바로 문의 가능합니다.<br />
            담당자 전화문의 : <span>00-0000-0000</span></p>
          </div>
        </div>
      </RodalPopup>
    </AppLayout>
  )
}

export default CertifyMall
