import React, { useState, useEffect, useRef } from 'react'

interface IProps {
  callbackFn?: Function,
  seconds?: number,
}
const useInterval = ({
  callbackFn,
  seconds
}: IProps) => {
  const [isIntervalActive, setIsIntervalActive] = useState(false);
  const [props, setIntervalProps] = useState({ callbackFn, seconds });
  const toggleInterval = () => {
    setIsIntervalActive(!isIntervalActive);
  }
  const resetInterval = () => {
    setIsIntervalActive(false);
  }
  useEffect(() => {
    let interval;
    clearInterval(interval);
    if (isIntervalActive && props.callbackFn && props.seconds) {
      interval = setInterval(props.callbackFn, props.seconds * 1000);
    }
    return () => clearInterval(interval);
  }, [isIntervalActive, props.callbackFn, props.seconds]);

  return { isIntervalActive, setIsIntervalActive, setIntervalProps, toggleInterval, resetInterval };
}

export default useInterval;