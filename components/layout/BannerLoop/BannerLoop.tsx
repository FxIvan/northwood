"use client"
import React, { useState, useRef, useEffect, useCallback } from "react";
import "./BannerLoop.css";

const InfiniteLooper = function InfiniteLooper({
  speed,
  direction,
  children,
}: {
  speed: number;
  direction: "right" | "left";
  children: React.ReactNode;
}) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;

    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }

    resetAnimation();
  }, [looperInstances]);

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className="looper" ref={outerRef} id="root">
      <div className="looper__innerList" ref={innerRef} data-animate="true">
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function BannerLoop() {
  const textLoop = [
    "+18",
    "PROHIBIDO LA VENTA DE MENORES",
    "-",
    "ENVIO DISCRETO",
    "-",
    "ENVIO GRATIS +20€",
    "-",
    "+54 11 36887781",
    "-",
  ];

  return (
    <div className="app">
      <InfiniteLooper speed={10} direction="right">
        <div className="contentBlock contentBlock--one text-white p-2">
          <h2 className="text-1xl sm:text-2xl">
            {textLoop.map((text, index) => {
              return (
                <span key={index} className="text-white px-4">
                  {text}
                </span>
              );
            })}
          </h2>
        </div>
      </InfiniteLooper>
    </div>
  );
}
