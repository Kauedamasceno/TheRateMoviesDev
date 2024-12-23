"use client";
import { useSizeScreen } from "@/hooks/useSizeScreen";

import Logo from "../Logo/logo";
import Nav from "../Nav/nav";

import { HeaderMobile } from "./headerMobile";

const Header = () => {
  const resSize = useSizeScreen();

  return (
    <>
      {!resSize && (
        <header className="p-3 flex justify-around">
          <Logo Name="The Rate Cinema" />
          <Nav />
        </header>
      )}

      {resSize && <HeaderMobile Name='The Rate Cinema'/>}
    </>
  );
};

export default Header;
