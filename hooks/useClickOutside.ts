import React, { useState, useEffect, useRef } from 'react'

interface IProps {
  ref?: any,
  initState?: boolean,
  exludeChildren?: boolean,
}
const useClickOutside = ({
  ref,
  initState = true,
  exludeChildren = false,
}: IProps) => {
  const [isClickOutside, setClickOutside] = useState(initState);
  !ref && (ref = useRef(null));

  const handleClickOutside = event => {
    if (!(exludeChildren && ref.current.contains(event.target)))
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