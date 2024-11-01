import React from "react";
import Logo from "../Logo/logo";
import Search from '../Search/search';


type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <Logo Name="LOgo MOvie" />
      <Search/>
    </header>
  );
};

export default Header;
