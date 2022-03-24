/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

 import { useState, useEffect } from "react";

 const useScroll = () => {
   const IS_BROWSER = typeof window !== 'undefined'
 
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
     setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
     setLastScrollTop(-bodyOffset.top);
     setScrollBottom(bodyOffset.bottom <= (window.innerHeight+50))
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
 