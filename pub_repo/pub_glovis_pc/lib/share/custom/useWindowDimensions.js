import window from 'global'
import { useState, useEffect } from 'react';

function getWindowDimensions(numW, numH) {
  // const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  return { 
    windowWidth: window.innerWidth - numW,
    windowHeight: window.innerHeight - numH
  }
}

export default function useWindowDimensions(numW, numH) {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions(numW, numH));

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions(numW, numH));
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}