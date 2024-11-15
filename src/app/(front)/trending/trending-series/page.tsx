import CardsMoviesAndSeries from "@/components/CardsMoviesAndSeries/CardsMoviesAndSeries";
import React from "react";

export const page = () => {
  return (
    <div>
      <CardsMoviesAndSeries
        name="Series em Tendencia no momento"
        slug="trending-series"
      />
    </div>
  );
};
