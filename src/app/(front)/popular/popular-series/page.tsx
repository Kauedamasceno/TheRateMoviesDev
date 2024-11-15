import React from "react";

import CardsMoviesAndSeries from "@/components/CardsMoviesAndSeries/CardsMoviesAndSeries";

const page = () => {
  return (
    <div>
      <CardsMoviesAndSeries name="Series populares" slug="popular-series" />
    </div>
  );
};

export default page;
