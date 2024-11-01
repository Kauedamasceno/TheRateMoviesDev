"use client";
import Logo from "../Logo/logo";
import Nav from "../Nav/nav";
import { useSizeScreen } from "@/hooks/useSizeScreen";
import { HeaderMobile } from "./headerMobile";

const Header = () => {
  const resSize = useSizeScreen();

  return (
    <>
      {!resSize && (
        <header className="p-3 flex justify-around">
          <Logo Name="LOgo MOvie" />
          <Nav />
        </header>
      )}

      {resSize && <HeaderMobile />}
    </>
  );
};

export default Header;
