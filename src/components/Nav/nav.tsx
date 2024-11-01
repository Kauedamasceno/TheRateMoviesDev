import React from "react";
import Search from "../Search/search";
import Link from "next/link";

type Props = {};

const Nav = (props: Props) => {
  return (
    <nav className="flex items-center gap-5">
      <Search />
      <Link href="/popular" className="bg-black">
        Populares
      </Link>
      <Link href="/trending">Em alta</Link>
      <Link href="/discover">Descubra</Link>
      <Link href="/comingUp">Que irão lançar</Link>
    </nav>
  );
};

export default Nav;
