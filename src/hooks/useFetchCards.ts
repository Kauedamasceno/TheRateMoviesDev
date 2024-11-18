"use client";

import { useEffect, useState } from "react";

import { GetApiUrl, Slug } from "@/utils/getApiURl";
import { GetUrlLink } from "@/utils/getLinkUrl";

import type { dataType } from "./useFetchOutdoor";

type useFetchCardsProps = {
  slug: Slug;
  click?: number[];
  page?: number;
};

export const useFetchCards = ({
  slug,
  click,
  page = 1,
}: useFetchCardsProps) => {
  const url = GetApiUrl({ slug, page });
  const link = GetUrlLink(slug);
  const [cards, setCards] = useState<dataType[] | undefined>(undefined);
  const [totalPage,setTotalPage] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (url === undefined) return "error";

        const res = await fetch(url, { cache: "force-cache" });
        const data = await res.json();
        if (click) {
          setCards(data.results.slice(click[0], click[1]));
        } else {
          setTotalPage(data.total_pages)
          setCards(data.results);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [click, url]);

  return { cards, link,totalPage };
};
