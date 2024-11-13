"use client";
import React, { useEffect, useState } from "react";

import { useFetchDetails } from "@/hooks/useFetchDetail";

import { DetailsData } from "./detailsData/detailsData";

type DetailsProps = {
  id: string;
  type: "movie" | "tv";
};

const Details = ({ id, type }: DetailsProps) => {
  const { detail } = useFetchDetails({ id, type });

  return (
    <div className="w-1/2 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-3 text-orange-600 bg-gray-900 rounded-lg p-2 max-md:text-3xl">
        {detail?.title || detail?.name}
      </h1>
      {detail && (
        <img
          src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
          alt={detail.title}
          className=" rounded-xl border-white border-2 rounded-lg"
        />
      )}
      <h2 className="text-3xl my-3 max-md:text-2xl">
        {detail?.title || detail?.name}
      </h2>
      <p className="p-3 rounded-lg text-xl bg-gray-950 border-white border-2 rounded-lg max-md:text-lg">
        {detail?.overview}
      </p>

      <h2 className="font-bold text-2xl my-4 max-md:text-xl ">Generos</h2>

      <div className="flex justify-evenly w-full  p-3 border-white border-2 rounded-lg flex-wrap max-md:justify-center max-md:text-center gap-3">
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

      <h2 className="font-bold text-2xl my-4  text-balance max-md:text-xl">
        Produtoras
      </h2>
      <div className="flex justify-between w-full flex-wrap  p-3 border-white border-2 rounded-lg max-md:justify-center max-md:text-center mb-4">
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
    </div>
  );
};

export default Details;
