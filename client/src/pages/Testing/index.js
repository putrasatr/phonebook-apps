import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import "./styles.css";

function useIsIntersecting(ref, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const callBack = ([entry]) => setIsIntersecting(entry.isIntersecting);

  const initializeObserver = useCallback(async () => {
    // delete window.IntersectionObserver;
    if (!("IntersectionObserver" in window)) {
      // This is specifically for Safari - Polyfill
      console.log("loading pollyfill");
      await import("intersection-observer");
      console.log("pollyfill loaded ");
    }
    return new IntersectionObserver(callBack, options);
  }, [options]);

  useEffect(() => {
    let observer = null;
    async function start() {
      observer = await initializeObserver();
      observer.observe(ref.current);
    }
    if (ref.current) start();

    return () => {
      if (observer) observer.disconnect();
    };
  }, [ref, initializeObserver]);

  return isIntersecting;
}

export default function App() {
  const elRef = useRef(null);
  const isIntersecting = useIsIntersecting(elRef);
  const nextComponent = useMemo(() => [], []);

  useEffect(() => {
    if (isIntersecting)
      nextComponent.push(
        <>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div ref={elRef} className="box red"></div>
        </>
      );
  }, [isIntersecting, nextComponent]);

  return (
    <div className="App">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div ref={elRef} className="box red"></div>
      {nextComponent.map((item) => item)}
    </div>
  );
}
