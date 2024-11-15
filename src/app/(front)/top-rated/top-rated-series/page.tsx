import CardsMoviesAndSeries from '@/components/CardsMoviesAndSeries/CardsMoviesAndSeries';
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <CardsMoviesAndSeries
        name="Series com melhor avaliação"
        slug="top-rated-series"
      />
    </div>
  );
};

export default page;
