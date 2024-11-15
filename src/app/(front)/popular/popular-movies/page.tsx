import React from "react";

import CardsMoviesAndSeries from "@/components/CardsMoviesAndSeries/CardsMoviesAndSeries";

const page = () => {
  return (
    <div>
      <CardsMoviesAndSeries name="Filmes populares" slug="popular-movies" />
    </div>
  );
};

export default page;
