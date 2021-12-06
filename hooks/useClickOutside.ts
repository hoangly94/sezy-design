import React, { useState, useEffect, useRef } from 'react'

const useClickOutside = (ref?, initState = true) => {
  const [isClickOutside, setClickOutside] = useState(initState);
  !ref && (ref = useRef(null));

  const handleClickOutside = event => {
    setClickOutside(!(!ref.current || ref.current.contains(event.target)));
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isClickOutside, setClickOutside };
}

export default useClickOutside;