"use client";
import React, { useState } from "react";

import { useFetchCards } from "@/hooks/useFetchCards";
import { Slug } from "@/utils/getApiURl";

import Card from "../Card/Card";

type CardsMoviesAndSeriesProps = {
  slug: Slug;
  name: string;
};

const CardsMoviesAndSeries = ({ slug, name }: CardsMoviesAndSeriesProps) => {
  const [page, setPage] = useState(1);

  const { cards,totalPage } = useFetchCards({ slug, page });

  return (
    <div>
      <h2 className="mb-4 text-3xl text-center font-bold text-orange-600">
        {name}
      </h2>
      <div className="h-full w-full pb-20 grid grid-cols-5 gap-20 justify-items-center max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {cards &&
          cards.map((e) => {
            return (
              <Card
                id={e.id}
                name={e.name}
                poster_path={e.poster_path}
                title={e.title}
                key={e.id}
              />
            );
          })}
      </div>
      <div className="w-full mb-4 flex items-center justify-center gap-4 ">
        {page > 1 && (
          <button onClick={() => setPage((r) => r - 1)} className="w-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-arrow-left-circle h-8 text-orange-600"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          </button>
        )}
        {page < totalPage && (
          <button
            onClick={() => setPage((r) => r + 1)}
            className="w-8 text-center  text-orange-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-arrow-right-circle h-8 "
              viewBox="0 0 16 16"
            >
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default CardsMoviesAndSeries;
