import React from "react";

type detailsData = {
  type: "movie" | "tv";
  adult: boolean;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  budget: number;
  revenue: number;
  runtime: number;
  status: string;
  number_of_episodes: number;
  number_of_seasons: number;
  in_production: boolean;
};

export const DetailsData = ({
  type,
  adult,
  budget,
  first_air_date,
  release_date,
  revenue,
  runtime,
  vote_average,
  in_production,
  number_of_episodes,
  number_of_seasons,
}: detailsData) => {
  if (type === "movie") {
    return (
      <div className="w-full p-3 mt-4 flex flex-col gap-3  rounded-lg bg-gray-950">
        <h2 className="text-xl text-center font-bold max-md:text-lg">Dados</h2>
        <p className="font-bold max-md:text-sm">
          Maior de 18:
          <span className="font-normal text-orange-600 ">
            {adult ? " Sim" : " Não"}
          </span>
        </p>
        {
          <p className="font-bold max-md:text-sm">
            Data de lançamento:
            <span className="font-normal text-orange-600">
              {" " + new Date(release_date).toLocaleDateString("pt-BR")}
            </span>
          </p>
        }
        <p className="font-bold max-md:text-sm">
          tempo de duraçao:
          <span className="font-normal text-orange-600">
            {" " + runtime}
          </span>{" "}
          minutos
        </p>
        <p className="font-bold max-md:text-sm">
          Nota:
          <span className="font-normal text-orange-600">
            {" " + (vote_average / 2).toFixed(2)}
          </span>
        </p>

        <p className="font-bold max-md:text-sm">
          Orçamento:
          <span className="font-normal text-orange-600">
            {" $" + budget.toLocaleString("pt-BR")}
          </span>
        </p>
        <p className="font-bold max-md:text-sm">
          Arrecadação:
          <span className="font-normal text-orange-600">
            {"  $" + revenue.toLocaleString("pt-BR")}
          </span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="w-full p-3 mt-4 flex flex-col gap-3 rounded-lg bg-gray-950">
        <h2 className="text-center font-bold text-xl max-md:text-lg">Dados</h2>
        <p className="font-bold max-md:text-sm">
          Maior de 18:
          <span className="font-normal text-orange-600">
            {adult ? " Sim" : " Não"}
          </span>
        </p>

        {
          <p className="font-bold max-md:text-sm">
            Data de lançamento:
            <span className="font-normal text-orange-600">
              {" " + first_air_date}
            </span>
          </p>
        }

        {
          <p className="font-bold max-md:text-sm">
            Números de temporadas:
            <span className="font-normal text-orange-600">
              {" " + number_of_seasons}
            </span>
          </p>
        }

        {
          <p className="font-bold max-md:text-sm">
            Números de episódios:
            <span className="font-normal text-orange-600">
              {" " + number_of_episodes}
            </span>
          </p>
        }

        {
          <p className="font-bold max-md:text-sm">
            Em procução:
            <span className="font-normal text-orange-600">
              {in_production ? " Sim" : " Não"}
            </span>
          </p>
        }
      </div>
    );
  }
};
