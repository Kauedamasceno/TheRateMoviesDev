"use client";
import { useEffect, useState } from "react";

export const useSizeScreen = () => {
  const [resSize, setResSize] = useState(window.innerWidth);
  let sizeMobile = false;

  useEffect(() => {
    const getsize = () => setResSize(innerWidth);

    window.addEventListener("resize", getsize);

    return () => {
      window.removeEventListener("resize", getsize);
    };
  }, [resSize]);

  if (resSize < 1024) {
    sizeMobile = true;
  }
  return sizeMobile;
};
