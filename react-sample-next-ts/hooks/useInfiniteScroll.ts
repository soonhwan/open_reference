/**
 * useInfiniteScroll React custom hook
 * Usage:
 *    const isFetching = useInfiniteScroll(function)
 */

 import { useState, useLayoutEffect } from "react";
 import utils from "utils";

 const IS_BROWSER = utils.IS_BROWSER

 const useInfiniteScroll = (callback: () => void) => {
  const [isFetching, setIsFetching] = useState<boolean>(false)
   
  useLayoutEffect(() => {
    let _timer: NodeJS.Timeout | null;
    function onScroll() {
      if (IS_BROWSER) {
        if (!_timer) {
          _timer = setTimeout(() => {
            _timer = null;
            if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
              setIsFetching(true)
              callback()
            } else {
              setIsFetching(false)
            }
          }, 300);          
        }
        
      }
    }
    
    if (IS_BROWSER) window.addEventListener('scroll', onScroll)
    return () => {
      if (IS_BROWSER) {
        if (_timer) clearTimeout(_timer);
        window.removeEventListener('scroll', onScroll)
      }
    }
  }, [callback, isFetching]);
  return isFetching
}
  
 export default useInfiniteScroll;
 
