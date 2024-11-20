import Deck from "../Deck/Deck";

const DecksHome = () => {
  return (
    <div>
      <Deck name="Filmes tendencia" slug="trending-movies" />
      <Deck name="Séries tendencia" slug="trending-series" />
      <Deck name="Filmes populares" slug="popular-movies" />
      <Deck name="Séries populares" slug="popular-series" />
      <Deck name="Descubra" slug="discovery" />
    </div>
  );
};

export default DecksHome;
