import React from "react";
import Search from "../Search/search";
import Link from "next/link";

type Props = {};

const Nav = (props: Props) => {
  return (
    <nav className="flex items-center gap-7 max-lg:flex-col">
      <Search />
      <Link href="/popular" className="max-lg:text-2xl">
        Populares
      </Link>
      <Link href="/trending" className="max-lg:text-2xl">
        Em alta
      </Link>
      <Link href="/discover" className="max-lg:text-2xl">
        Descubra
      </Link>
      <Link href="/comingUp" className="max-lg:text-2xl">
        Que irão lançar
      </Link>
    </nav>
  );
};

export default Nav;
