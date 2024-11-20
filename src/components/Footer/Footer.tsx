import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-56 flex justify-center items-center gap-4 bg-gray-950 max-sm:gap-2 max-sm:p-2 ">
      <div className="h-4/6  flex flex-col">
        <h2 className="text-2xl font-bold text-orange-600 ">Filmes</h2>

        <Link href="/trending/trending-movies" className="max-sm:text-sm">
          Tendencia de filmes
        </Link>

        <Link href="/popular/popular-movies" className="max-sm:text-sm">
          Filmes populares
        </Link>

        <Link href="/top-rated/top-rated-movies" className="max-sm:text-sm">
          Filmes melhores avaliados
        </Link>

        <Link href="/discovery" className="max-sm:text-sm">
          Descubra filmes
        </Link>
      </div>

      <div className="h-4/6 flex flex-col">
        <h2 className="text-2xl font-bold text-orange-600">Séries</h2>

        <Link href="/trending/trending-series" className="max-sm:text-sm">
          Tendencia de séries
        </Link>

        <Link href="/popular/popular-series" className="max-sm:text-sm">
          Séries populares
        </Link>

        <Link href="/top-rated/top-rated-series" className="max-sm:text-sm">
          Séries melhores avaliados
        </Link>
      </div>
    </div>
  );
};

export default Footer;
