import React from "react";
import Logo from "../Logo/logo";
import Search from "../Search/search";
import Nav from "../Nav/nav";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-around p-3">
      <Logo Name="LOgo MOvie" />
      <Nav />
    </header>
  );
};

export default Header;
