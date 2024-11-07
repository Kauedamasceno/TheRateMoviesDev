import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-56 flex justify-center items-center gap-4 bg-gray-950 max-sm:gap-2 max-sm:p-2 ">
      <div className="h-4/6  flex flex-col">
        <h2 className="text-2xl font-bold text-orange-600 ">Filmes</h2>

        <Link href="/trending-movies" className="max-sm:text-sm">
          Tendencia de filmes
        </Link>

        <Link href="/popular-movies" className="max-sm:text-sm">
          Filmes populares
        </Link>

        <Link href="/top-rated-movies" className="max-sm:text-sm">
          Filme melhores avaliados
        </Link>

        <Link href="/discover-movies" className="max-sm:text-sm">
          Descubra filmes
        </Link>

        <Link href="/coming-up" className="max-sm:text-sm">
          filmes pra vim
        </Link>
      </div>

      <div className="h-4/6 flex flex-col">
        <h2 className="text-2xl font-bold text-orange-600">Séries</h2>

        <Link href="/trending-series" className="max-sm:text-sm">
          Tendencia de series
        </Link>

        <Link href="/popular-series" className="max-sm:text-sm">
          Series populares
        </Link>

        <Link href="/top-rated-series" className="max-sm:text-sm">
          Series melhores avaliados
        </Link>

        <Link href="/discover-series" className="max-sm:text-sm">
          Descubra series
        </Link>
      </div>

      <div className="h-4/6 flex flex-col justify-start">
        <h2 className="text-2xl font-bold text-orange-600">Generos</h2>

        <Link href="/genres-movies" className="max-sm:text-sm">
          Generos de filmes
        </Link>

        <Link href="/genres-series" className="max-sm:text-sm">
          Generos de series
        </Link>
      </div>
    </div>
  );
};

export default Footer;
