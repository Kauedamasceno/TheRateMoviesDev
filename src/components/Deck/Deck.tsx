"use client";
import React, { useState } from "react";
import Link from "next/link";

import * as handlesCard from "@/utils/handleClickCards";
import { Slug, useFetchCards } from "@/hooks/useFetchCards";

import Card from "../Card/Card";

type DeckProps = {
  slug: Slug;
  name: string;
};

const Deck = ({ slug, name }: DeckProps) => {
  const [click, setClick] = useState<number[]>([0, 5]);

  const { cards, link } = useFetchCards({ slug, click});
  console.log(cards, "-------------------------------------------");
  return (
    <div className="h-full w-full flex flex-col relative ">
      {click[1] < 20 && (
        <div
          className="absolute z-10 top-2/4 right-7 rounded-full bg-orange-600 "
          onClick={() =>
            setClick(
              handlesCard.handleClickAddArray({
                num1: click[0],
                num2: click[1],
              })
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-arrow-right-circle h-8 "
            viewBox="0 0 16 16"
          >
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </div>
      )}
      {click[0] > 0 && (
        <div
          className="absolute z-10 top-2/4 left-7 rounded-full bg-orange-600 "
          onClick={() =>
            setClick(
              handlesCard.handleClickDecreaseArray({
                num1: click[0],
                num2: click[1],
              })
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-arrow-left-circle h-8"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </div>
      )}

      <div className="flex justify-around mb-2 bg-gray-950 ">
        <h2 className="text-xl font-bold">{name}</h2>
        {link && (
          <Link
            rel="stylesheet"
            href={link}
            className="p-1 text-xl font-bold text-black bg-orange-600 rounded-lg"
          >
            Veja mais
          </Link>
        )}
      </div>
      <div className="h-full w-full flex justify-evenly mb-14 overflow-hidden">
        {cards &&
          cards.map((e) => (
            <Card
              name={e.name}
              id={e.id}
              poster_path={e.poster_path}
              title={e.title}
              key={e.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Deck;
