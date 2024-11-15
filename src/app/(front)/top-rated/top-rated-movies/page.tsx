import CardsMoviesAndSeries from "@/components/CardsMoviesAndSeries/CardsMoviesAndSeries";
import React from "react";

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
