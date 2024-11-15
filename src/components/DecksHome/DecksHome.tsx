import React from "react";
import Deck from "../Deck/Deck";

const DecksHome = () => {
  return (
    <div>
      <Deck name="Filmes tendencia" slug="trending-movies" />
      <Deck name="Series tendendia" slug="trending-series" />
      <Deck name="Filmes populares" slug="popular-movies" />
      <Deck name="Series populares" slug="popular-series" />
      <Deck name="Descubras" slug="discovery" />
    </div>
  );
};

export default DecksHome;
