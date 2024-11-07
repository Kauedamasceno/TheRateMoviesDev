"use client";
import React from "react";

import { Slug, useFetchCards } from "@/hooks/useFetchCards";

import Card from "../Card/Card";

type DeckProps = {
  slug: Slug;
  name: string;
};

const Deck = ({ slug, name }: DeckProps) => {
  const { cards } = useFetchCards({ slug: slug, click: 1 });
  console.log(cards, "-------------------------------------------");
  return (
    <div className="h-full w-full flex justify-center">
      <div>
        <h2>{name}</h2>
      </div>
      {cards &&
        cards.map((e) => (
          <Card
            id={e.id}
            poster_path={e.poster_path}
            title={e.title}
            key={e.id}
          />
        ))}
    </div>
  );
};

export default Deck;
