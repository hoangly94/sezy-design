import React, { useEffect } from 'react'

interface IProps {
  event: 'keyup' | 'keydown' | 'click' | 'change' | 'mouseover' | 'mouseout',
  callback: EventListenerOrEventListenerObject,
  condition?: Array<any>,
}

const useEvent = (
  event: 'keyup' | 'keydown' | 'click' | 'change' | 'mouseover' | 'mouseout',
  callback: EventListenerOrEventListenerObject,
  condition?: Array<any>,
) => {
  useEffect(() => {
    document.addEventListener(event, callback);
    return () => {
      document.removeEventListener(event, callback, true);
    };
  }, condition || []);
}

export default useEvent;