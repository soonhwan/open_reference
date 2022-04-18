import styled from 'styled-components'

export const LoaderSpinnerWrap = styled.div`
  padding: 40px 0;
  text-align: center;
  .ispinner {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px; 
    transform: scale(1.2);
  }
  .ispinner .ispinner-blade {
    position: absolute;
    top: 6.5px;
    left: 8.5px;
    width: 2px;
    height: 6.5px;
    background-color: #bababa;
    border-radius: 1.25px;
    animation: iLoaderSpinnerBlade 1s linear infinite;
    will-change: opacity; 
  }
  .ispinner .ispinner-blade:nth-child(1) {
    transform: rotate(45deg) translateY(-6.5px);
    animation-delay: -1.625s; 
  }
  .ispinner .ispinner-blade:nth-child(2) {
    transform: rotate(90deg) translateY(-6.5px);
    animation-delay: -1.5s; 
  }
  .ispinner .ispinner-blade:nth-child(3) {
    transform: rotate(135deg) translateY(-6.5px);
    animation-delay: -1.375s; 
  }
  .ispinner .ispinner-blade:nth-child(4) {
    transform: rotate(180deg) translateY(-6.5px);
    animation-delay: -1.25s; 
  }
  .ispinner .ispinner-blade:nth-child(5) {
    transform: rotate(225deg) translateY(-6.5px);
    animation-delay: -1.125s; 
  }
  .ispinner .ispinner-blade:nth-child(6) {
    transform: rotate(270deg) translateY(-6.5px);
    animation-delay: -1s; 
  }
  .ispinner .ispinner-blade:nth-child(7) {
    transform: rotate(315deg) translateY(-6.5px);
    animation-delay: -0.875s; 
  }
  .ispinner .ispinner-blade:nth-child(8) {
    transform: rotate(360deg) translateY(-6.5px);
    animation-delay: -0.75s; 
  }

  @keyframes iLoaderSpinnerBlade {
    0% {
      opacity: 1; }
    50% {
      opacity: 0.7; }
    100% {
      opacity: 0.25; } 
  }

`;