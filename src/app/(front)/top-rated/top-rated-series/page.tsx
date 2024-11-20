import React from "react";

import CardsMoviesAndSeries from "@/components/CardsMoviesAndSeries/CardsMoviesAndSeries";

const page = () => {
  return (
    <div>
      {" "}
      <CardsMoviesAndSeries
        name="Séries com melhores avaliações"
        slug="top-rated-series"
      />
    </div>
  );
};

export default page;
