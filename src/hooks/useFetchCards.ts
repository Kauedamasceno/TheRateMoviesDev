"use client";

import { useEffect, useState } from "react";

import type { dataType } from "./useFetchOutdoor";
import { useSizeScreen } from './useSizeScreen';

export type Slug = {
  slug: "trending-movies" | "trending-series" | "popular-movies" | "popular-series" | "coming-up";
};

type useFetchCardsProps = {
  slug: Slug;
  click: number[];
};

export const useFetchCards = ({ slug, click }: useFetchCardsProps) => {
  const url = GetUrl(slug);
  const link = GetUrlLink(slug)
  const [cards, setCards] = useState<dataType[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (url === undefined) return "error";
        
        const res = await fetch(url, {cache: 'force-cache'});
        const data = await res.json();
        setCards(data.results.slice(click[0],click[1]));
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [click, url]);

  return { cards,link };
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

const GetUrlLink = ({ slug }: Slug) => {

  switch (slug) {
    case "trending-movies":
      return "/trending/trending-movies";
    case "trending-series":
      return "/trending/trending-series";
    case "popular-movies":
      return "/popular/popular-movies";
    case "popular-series":
      return "/popular/popular-series";
    case "coming-up":
      return "/coming-up";

    default:
  }
};
