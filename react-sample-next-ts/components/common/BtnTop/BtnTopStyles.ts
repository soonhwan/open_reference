import styled from 'styled-components'

export const BtnTopWrap = styled.div`
  .btn_top { width: 2.5rem; height: 2.5rem; position: fixed; bottom: 15px; right: 1.25rem; display: ; z-index: 11; margin-bottom: 67px; transition: all 0.3s; }

  .btn_top:before { display: block; content: ""; position: absolute; top: 0; left: 0; border-radius: 50%; width: 2.5rem; height: 2.5rem; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04); }

  .btn_top.active { display: block; }

  .btn_top.is-space, .btn_top.prd { bottom: 4.375rem; }
`;