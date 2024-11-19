"use client";
import React, { useEffect, useState } from "react";

import { useFetchDetails } from "@/hooks/useFetchDetail";

import Season from "../Season/Season";

import { DetailsData } from "./detailsData/detailsData";

type DetailsProps = {
  id: string;
  type: "movie" | "tv";
};

const Details = ({ id, type }: DetailsProps) => {
  const [hasSeason, setHasSeason] = useState(false);
  const { detail } = useFetchDetails({ id, type });

  useEffect(() => {
    if (detail !== undefined) {
      if (detail.seasons) {
        setHasSeason(true);
      } else {
        setHasSeason(false);
      }
    }
  }, [detail]);

  return (
    <div className="w-1/2 flex flex-col items-center">
      <h1 className=" mb-3 p-2 text-4xl font-bold rounded-lg text-orange-600 bg-gray-900  max-md:text-3xl">
        {detail?.title || detail?.name}
      </h1>
      {detail && (
        <img
          src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
          alt={detail.title}
          className=" border-2 rounded-lg border-white "
        />
      )}
      <h2 className="text-3xl my-3 max-md:text-2xl">
        {detail?.title || detail?.name}
      </h2>
      <p className="p-3 rounded-lg text-xl border-2 bg-gray-950 border-white max-md:text-lg">
        {detail?.overview}
      </p>

      <h2 className="my-4 text-2xl font-bold max-md:text-xl ">Generos</h2>

      <div className="w-full p-3 flex flex-wrap gap-3 rounded-lg justify-evenly border-white border-2  max-md:justify-center max-md:text-center ">
        {detail &&
          detail.genres.map((e) => {
            return (
              <div key={e.id} className="flex flex-col items-center">
                <h2 className="text-lg font-bold text-orange-600 max-md:text-base">
                  {e.name}
                </h2>
              </div>
            );
          })}
      </div>

      {detail && (
        <DetailsData
          adult={detail.adult}
          budget={detail.budget}
          first_air_date={detail.first_air_date}
          release_date={detail.release_date}
          revenue={detail.revenue}
          runtime={detail.runtime}
          status={detail.status}
          type={type}
          vote_average={detail.vote_average}
          in_production={detail.in_production}
          number_of_episodes={detail.number_of_episodes}
          number_of_seasons={detail.number_of_seasons}
        />
      )}

      <h2 className="my-4 text-2xl font-bold text-balance max-md:text-xl">
        Produtoras
      </h2>
      <div className="w-full mb-4 p-3 flex justify-between flex-wrap border-2 rounded-lg border-white max-md:justify-center max-md:text-center ">
        {detail &&
          detail.production_companies.map((e) => {
            return (
              <div key={e.id} className="flex flex-col items-center">
                <h2 className="text-lg font-bold text-orange-600 max-md:text-base">
                  {e.name}
                </h2>
                {e.origin_country}
              </div>
            );
          })}
      </div>

      {hasSeason && detail && <Season seasons={detail.seasons} />}
    </div>
  );
};

export default Details;
