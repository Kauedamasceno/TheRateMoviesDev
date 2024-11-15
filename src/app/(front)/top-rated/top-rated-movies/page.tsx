import React from "react";

import CardsMoviesAndSeries from "@/components/CardsMoviesAndSeries/CardsMoviesAndSeries";

const page = () => {
  return (
    <div>
      <CardsMoviesAndSeries
        name="Filmes com melhor avaliação"
        slug="top-rated-movies"
      />
    </div>
  );
};

export default page;
