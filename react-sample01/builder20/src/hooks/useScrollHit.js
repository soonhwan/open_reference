import { useState, useRef, useLayoutEffect } from 'hooks'

const isBrowser = typeof window !== 'undefined'

function getHeight({ element }) {
  // if (!isBrowser) return 0;
  return (element ? element.current : document.body).outerHeight;
}

function getClientRect({ element }) {
  // if (!isBrowser) return { x: 0, y: 0, width: 0, height: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return { 
    x: position.left, 
    y: Math.abs(position.top),
    width: position.width,
    height: position.height,
  };
}

let beforeElement = null;
let beforeRect = { x: 0, y: 0, width: 0, height: 0 };

function isResize ({ element, currRect }) {
  // console.log('** isResize ==> ', element, beforeElement, currRect, beforeRect);
  if (element === beforeElement && (currRect.width !== beforeRect.width || currRect.height !== beforeRect.height)) {
    return true;
  }
  return false;
}

// element == useRef
const useScrollHit = ({ element = null, threshold = 0 } = {}) => {
  const [isHit, setHit] = useState(false);
  beforeElement = element;
  useLayoutEffect(() => {
    const handleScroll = () => {
      const currRect = getClientRect({ element })
      // console.log('** useScrollHit handleScroll ==> ', currRect, currRect.y > currRect.height - threshold);

      // resize check
      if (isResize({ element, currRect })) {
        setHit(false);
      } else {
        // console.log(currRect.y + window.outerHeight > currRect.height - threshold, (currRect.y + window.outerHeight) + ' > ' + currRect.height + ' - ' + threshold + ' = ' + (currRect.height - threshold))
        const windowHeight = isBrowser ? window.outerHeight : (currRect.y) * -1 // ssr 인 경우 발생 불가능 하도록
        setHit(currRect.y + windowHeight > currRect.height - threshold)  
      }

      if (element === beforeElement) {
        beforeRect = currRect;
      } else {
        //
      }
      // console.log('hit == ', currRect.y, currRect.height, threshold, currRect.y > currRect.height - threshold);
    }

    window.addEventListener('scroll', handleScroll)

    // return () => window.removeEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      beforeElement = element;
    }
  }, [element, threshold])

  return isHit;
}

export default useScrollHit;
