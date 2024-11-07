"use client";

import { useEffect, useState } from "react";

import type { dataType } from "./useFetchOutdoor";

export type Slug = {
  slug: "trending-movies" | "trending-series" | "popular-movies" | "popular-series" | "coming-up";
};

type useFetchCardsProps = {
  slug: Slug;
  click: number;
};

export const useFetchCards = ({ slug, click }: useFetchCardsProps) => {
  const url = GetUrl(slug);
  const [cards, setCards] = useState<dataType[] | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (url === undefined) return "error";
        const res = await fetch(url);
        const data = await res.json();
        setCards(data.results.slice(0, 6));
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [click, url]);

  return { cards };
};

const GetUrl = ({ slug }: Slug) => {
  switch (slug) {
    case "trending-movies":
      return "/api/trendingMovies";
    case "trending-series":
      return "/api/trendingSeries";
    case "popular-movies":
      return "/api/popularMovies";
    case "popular-series":
      return "/api/popularSeries";
    case "coming-up":
      return "o";

    default:
  }
};
