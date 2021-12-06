import React, { useState, useEffect, useRef } from 'react'

const useHover = (ref?, initState = false) => {
  const [value, setValue] = useState(initState);
  !ref && (ref = useRef(null));

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current]
  );

  return { ref, isHovered: value, setHovered: setValue };
}

export default useHover;