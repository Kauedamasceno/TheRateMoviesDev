"use client";
import { useEffect } from "react";
import Search from "../components/Search/search";

export default function Home() {
  const fetch2 = async () => {
    try {
      const res = await fetch("./api/search?query=avengers");

      // Check if the request was successful
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      // Parse JSON data from the response
      const data = await res.json();
      console.log(data); // Log the actual data from the response
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  fetch2();
  // Empty

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Search />
    </div>
  );
}
