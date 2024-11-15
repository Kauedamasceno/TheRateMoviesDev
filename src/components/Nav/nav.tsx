import React from "react";
import Link from "next/link";

import Search from "../Search/search";

const Nav = () => {
  return (
    <nav className="flex items-center gap-7 max-lg:flex-col">
      <Search />
      <Link href="/popular" className="max-lg:text-2xl">
        Populares
      </Link>
      <Link href="/trending" className="max-lg:text-2xl">
        Em alta
      </Link>
      <Link href="/discovery" className="max-lg:text-2xl">
        Descubra
      </Link>
      <Link href="/top-rated" className="max-lg:text-2xl">
        Melhores avaliados
      </Link>
    </nav>
  );
};

export default Nav;
