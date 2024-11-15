"use client";
import { useEffect, useState } from "react";

import Logo from "../Logo/logo";
import Nav from "../Nav/nav";

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <header className="p-4 flex justify-between">
          <Logo Name="LOgo MOvie" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-list w-10 text-white"
            viewBox="0 0 16 16"
            onClick={() => setIsOpen((r) => !r)}
          >
            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </header>
      )}
      {isOpen && (
        <header className="h-96 w-screen p-4 flex flex-col absolute z-10 bg-black">
          <div className="h-20 w-full flex justify-between">
            <Logo Name="LOgo MOvie" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-list w-10 h-10 text-white"
              viewBox="0 0 16 16"
              onClick={() => setIsOpen((r) => !r)}
            >
              <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </div>
          <Nav />
        </header>
      )}
    </>
  );
};
