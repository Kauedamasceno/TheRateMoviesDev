import React from "react";

import CardsMoviesAndSeries from "@/components/CardsMoviesAndSeries/CardsMoviesAndSeries";
const Trending = () => {
  return (
    <div>
      <CardsMoviesAndSeries
        name="Conteúdos em tendencia no momento"
        slug="trending-movies"
      />
    </div>
  );
};

export default Trending;
