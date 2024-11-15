import React from "react";

import CardsMoviesAndSeries from "@/components/CardsMoviesAndSeries/CardsMoviesAndSeries";

const page = () => {
  return (
    <div>
      <CardsMoviesAndSeries
        name="Filmes em Tendencia no momento"
        slug="trending-movies"
      />
    </div>
  );
};

export default page;
