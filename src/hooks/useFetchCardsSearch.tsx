import { useEffect, useState } from "react";

import { dataType } from "./useFetchOutdoor";

type useFetchCardsSearchProps = {
  slug: string;
  page: number;
};

export const useFetchCardsSearch = ({
  slug,
  page,
}: useFetchCardsSearchProps) => {
  const [cards, setCards] = useState<dataType[] | undefined>(undefined);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      console.log(page);
      const response = await fetch(`/api/search?query=${slug}&page=${page}`, {
        cache: "force-cache",
      });
      const data = await response.json();
      setTotalPage(data.total_pages);

      setCards(data.results);
    };
    fetchData();
  }, [slug, page]);

  return { cards, totalPage };
};
