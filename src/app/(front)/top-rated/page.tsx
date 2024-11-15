import React from "react";

import CardsMoviesAndSeries from "@/components/CardsMoviesAndSeries/CardsMoviesAndSeries";

const page = () => {
  return (
    <div>
      <CardsMoviesAndSeries
        name="Conteúdos com melhor avaliação"
        slug="top-rated-series"
      />
    </div>
  );
};

export default page;
