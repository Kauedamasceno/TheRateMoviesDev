import React from "react";

type SeasonProps = {
  seasons: [
    {
      air_date: string;
      episode_count: number;
      id: number;
      name: string;
      overview: string;
      poster_path: string;

      vote_average: number;
    }
  ];
};

const Season = ({ seasons }: SeasonProps) => {
  return (
    <div className="w-full   ">
      {seasons.map((season) => {
        return (
          <div
            key={season.id}
            className="h-96 p-3 my-4 flex gap-3 rounded-lg bg-gray-950 max-lg:h-auto max-lg:block"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
              alt=""
              className="h-full"
            />

            <div className="h-full">
              <p className="text-xl font-bold text-orange-600">{season.name}</p>

              <p className="font-bold">
                Números de episodios:{" "}
                <span className="font-normal">{season.episode_count}</span>{" "}
              </p>
              <p className="font-bold">
                Avaliação:{" "}
                <span className="font-normal">
                  {(season.vote_average / 2).toFixed(2)}
                </span>
              </p>
              <p className="font-bold">
                Descrição:{" "}
                <span className="text-sm text-wrap font-normal ">
                  {season.overview}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Season;
