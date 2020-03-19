import { useLayoutEffect, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const useCreatePortalInBody = (zid) => {

  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current === null && typeof document !== 'undefined') {
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.left = 0;
      div.style.top = 0;
      div.style.width = '100%';
      div.style.zIndex = zid !== undefined ? zid : null;
      wrapperRef.current = div;
    }

    const wrapper = wrapperRef.current;
    if (!wrapper || typeof document === 'undefined') {
      return;
    }

    document.body.appendChild(wrapper);
    return () => {
      document.body.removeChild(wrapper);
    }
  }, [])
  
  return (
    children => wrapperRef.current && createPortal(children, wrapperRef.current)
  )
}

export default useCreatePortalInBody;