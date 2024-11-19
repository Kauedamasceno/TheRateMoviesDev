"use client";

import { useEffect, useState } from "react";

export const useSizeScreen = () => {
  const [resSize, setResSize] = useState<number | null>(null); // Initialize with `null` to handle SSR gracefully.
  const [sizeMobile, setSizeMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setResSize(window.innerWidth);
    };

    handleResize(); // Set the initial size.

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (resSize !== null) {
      setSizeMobile(resSize < 1024); // Update `sizeMobile` based on `resSize`.
    }
  }, [resSize]);

  return sizeMobile;
};
