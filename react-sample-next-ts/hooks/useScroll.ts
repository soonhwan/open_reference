/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

 import { useState, useEffect } from "react";
 import utils from "utils";

 const IS_BROWSER = utils.IS_BROWSER

 const useScroll = () => {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [bodyOffset, setBodyOffset] = useState(
    IS_BROWSER && document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState<string>();
  const [scrollBottom, setScrollBottom] = useState<boolean>();
 
  const listener = () => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "scrollDown" : "scrollUp");
    setLastScrollTop(-bodyOffset.top);
    setScrollBottom(bodyOffset.bottom - window.innerHeight)
  };
 
  useEffect(() => {
    if (IS_BROWSER) window.addEventListener("scroll", listener);
    return () => {
      if (IS_BROWSER) window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
    scrollBottom,
  };
}
  
 export default useScroll;
 