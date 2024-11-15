import React from "react";

import CardsMoviesAndSeries from "@/components/CardsMoviesAndSeries/CardsMoviesAndSeries";

const page = () => {
  return (
    <div>
      <CardsMoviesAndSeries
        name="Series em Tendencia no momento"
        slug="trending-series"
      />
    </div>
  );
};

export default page; 
