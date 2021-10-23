import React, { useState, useEffect, useRef } from 'react'

const useClickOutside = (initState = { isOutside: true }) => {
  const [clickData, setClickData] = useState(initState);
  const ref = useRef(null);

  // const handleHideDropdown = (event: KeyboardEvent) => {
  //   if (event.key === "Escape") {
  //     setIsClickOutside(true);
  //   }
  // };

  const handleClickOutside = (clickData, setClickData: Function) => event => {
    const isOnside = (ref as any)?.current?.contains(event.target);
    const isClickOutside = clickData.isOutside;
    if (!isOnside && !isClickOutside) {
      clickData.isOutside = true;
      setClickData({ ...clickData });
    }
    if (isOnside) {
      clickData.isOutside = false;
      setClickData({ ...clickData });
    }
  };

  useEffect(() => {
    // document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside(clickData, setClickData));
    return () => {
      // document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside(clickData, setClickData), true);
    };
  }, []);

  return { ref, clickData, setClickData };
}

export default useClickOutside;