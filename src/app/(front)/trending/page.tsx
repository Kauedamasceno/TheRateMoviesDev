import React from "react";

import Deck from "@/components/Deck/Deck";
import CardsMoviesAndSeries from '@/components/CardsMoviesAndSeries/CardsMoviesAndSeries';
const Trending = () => {
  return (
    <div>
      <CardsMoviesAndSeries
        name="Conteúdos em Tendencia no momento"
        slug="trending-movies"
      />
    </div>
  );
};

export default Trending;
