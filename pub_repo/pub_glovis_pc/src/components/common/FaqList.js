import MenuItem from '@lib/share/menu/MenuItem';
import MenuTitle from '@lib/share/menu/MenuTitle';
import MenuCont from '@lib/share/menu/MenuCont';
import Button from '@lib/share/items/Button';

const FaqList = ({section="common", isTitle=true}) => {
  return (
    <>
      {
        isTitle && (
          <div className="faq-tit">
            <h4>자주 묻는 질문</h4>
            {section === "autoAuction" && <p className="info">오토옥션에 대한 궁금한 점을 빠르게 해결하세요.</p>}
            <Button color="black" title="더 많은 FAQ 보러가기" iconType='arrow' />
          </div>
        )
      }
      <div className="faq-list">
        <ul className={isTitle ? `menu-list` : `menu-list no-tit`}>
          <MenuItem>
            <MenuTitle>
              <h6>내차의 가격은 어떻게 산정되나요?</h6>
            </MenuTitle>
            <MenuCont>
              <p>
                <em>방문자 평가 판매 : </em>담당자가 고객님이 원하시는 장소로 무료 방문 후 약 5~10분 정도 차량을 점검한 후 시세 대비 최고가 산정하여 안내해드립니다.<br />
                <em>셀프 등록 판매 : </em>등록하신 차량 정보와 원하시는 판매가를 토대로 담당자가 시세 대비 최고가 산정하여 안내해 드립니다.<br />
                <em>무평가 판매 : </em>계약 후 입고된 차량을 담당자가 검수하여 시세 대비 최고가 산정하여 안내해 드립니다.
              </p>
            </MenuCont>
          </MenuItem>
          <MenuItem>
            <MenuTitle>
              <h6>접수 후 방문까지 걸리는 시간은 어느 정도인가요?</h6>
            </MenuTitle>
            <MenuCont>
              <p>대략 한시간 정도 소요됩니다.</p>
            </MenuCont>
          </MenuItem>
          <MenuItem>
            <MenuTitle>
              <h6>명의 이전은 내가 직접 해야 하나요?</h6>
            </MenuTitle>
            <MenuCont>
              <p>네 직접 하셔야 됩니다.</p>
            </MenuCont>
          </MenuItem>
          <MenuItem>
            <MenuTitle>
              <h6>할부나 리스로 구입한 차량도 매각이 가능한가요?</h6>
            </MenuTitle>
            <MenuCont>
              <p>네 가능합니다.</p>
            </MenuCont>
          </MenuItem>
          <MenuItem>
            <MenuTitle>
              <h6>공휴일/주말에도 방문이 가능한가요?</h6>
            </MenuTitle>
            <MenuCont>
              <p>미리 예약잡으신 고객님들에 한에서 가능합니다.</p>
            </MenuCont>
          </MenuItem>
        </ul>
      </div>
    </>
  )
}

export default FaqList;