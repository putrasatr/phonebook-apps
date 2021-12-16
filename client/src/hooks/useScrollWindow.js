import { useLayoutEffect, useState } from "react";

export default function useScrollWindow() {
  const [pageYOffset, setPageYOffset] = useState([0, 0]);
  const [pageXOffset, setPageXOffset] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setPageYOffset(window.pageYOffset);
      setPageXOffset(window.pageXOffset);
    }
    window.addEventListener("scroll", updateSize);
    updateSize();
    return () => window.removeEventListener("scroll", updateSize);
  }, []);
  return { pageYOffset, pageXOffset };
}
