import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-56 flex justify-center items-center gap-4 bg-gray-950 ">
      <div className="h-4/6  flex flex-col">
        <h2 className="text-2xl font-bold text-orange-600">Filmes</h2>

        <Link href="/trending-movies">Tendencia de filmes</Link>

        <Link href="/popular-movies">Filmes populares</Link>

        <Link href="/top-rated-movies">Filme melhores avaliados</Link>

        <Link href="/discover-movies">Descubra filmes</Link>

        <Link href="/coming-up">filmes pra vim</Link>
      </div>

      <div className="h-4/6 flex flex-col">
        <h2 className="text-2xl font-bold text-orange-600">Séries</h2>

        <Link href="/trending-series">Tendencia de series</Link>

        <Link href="/popular-series">Series populares</Link>

        <Link href="/top-rated">Series melhores avaliados</Link>

        <Link href="/discover-series">Descubra series</Link>
      </div>

      <div className="h-4/6 flex flex-col justify-start">
        <h2 className="text-2xl font-bold text-orange-600">Generos</h2>

        <Link href="/genres-movies">Generos de filmes</Link>

        <Link href="/genres-series">Generos de series</Link>
      </div>
    </div>
  );
};

export default Footer;
