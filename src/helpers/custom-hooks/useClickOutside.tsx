import React, { useEffect } from "react";

const useOutsideClick = (ref: any, callback: any) => {
  const handleClick = (e: { target: any }) => {
    if (ref.current && !ref.current.contains(e.target)) {
      console.log(ref.current);
      console.log(e.target);
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
