import styled from 'styled-components'

export const SelectWrap = styled.div`
  .select { 
    position: relative; height: 2.5rem; display: inline-block; background-color: #fff; 
  
    select { 
      display: block; height: 2.5rem; width: 100%; position: absolute; top: 0; left: 0; opacity: 0; 
    
      &:focus + .title { 
        border-color: #333; 
      }

      &:disabled + .title { 
        border-color: #eaeaea; background-color: #fafafa; color: #ccc; 

        &:before { 
          background: url("//static.wconcept.co.kr/mobile/images/common/ico_title_down_d_12.png") no-repeat; background-size: 100%;
        }
      }
    }
        
    .title { 
      display: block; border: 1px solid #dddddd; font-size: 0.875rem; line-height: 2.375rem; letter-spacing: -0.28px; height: 2.5rem; padding: 0 1.875rem 0 0.9375rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding-top: 1px; color: #888888; 
    
      &.readonly { 
        background: #fafafa; color: #777; -webkit-text-fill-color: #777; border-color: #eaeaea; } 
 
      &:before { 
        content: ''; display: block; width: 0.75rem; height: 0.75rem; background: url("//static.wconcept.co.kr/mobile/images/common/icon-select.png") 0 0 no-repeat; background-size: 100%; position: absolute; top: 0.8125rem; right: 0.9375rem; }
    }
    
    &.full { display: block; width: 100%; }
  }
  
  &.sorting-bar { 
    text-align: right; padding: 0 1.25rem 1rem; 
    
    .select { 
      height: 1.125rem; 
      
      select { 
        height: 1.125rem; 
      }

      .title { 
        height: 1.125rem; font-size: 0.75rem; line-height: 1.125rem; letter-spacing: -0.24px; padding-right: 1.3125rem; border: none; 

        &:before {
          top: 1px; right: 0; width: 1rem; height: 1rem; background: url("//static.wconcept.co.kr/mobile/images/common/ico_select_category_open_16.png") no-repeat center / 100%;
        }
      }
    }
  }
`;