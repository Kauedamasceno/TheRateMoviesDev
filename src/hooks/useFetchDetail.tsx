"use client";

import { useEffect, useState } from "react";

type useFetchDetailsProps = {
  id: string;
  type: string;
};

type fetchDetail = {
  name: string;
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  episode_number: number;
  number_of_episodes: number;
  number_of_seasons: number;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  overview: string;
  id: 533535;

  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  in_production: boolean;
  season_number: number;
  seasons: [
    {
      air_date: string;
      episode_count: number;
      id: number;
      name: string;
      overview: string;
      poster_path: string;

      vote_average: number;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;

  status: string;

  title: string;
  vote_average: number;
};

export const useFetchDetails = ({ id, type }: useFetchDetailsProps) => {
  const [detail, setDetail] = useState<fetchDetail | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/api/search/searchMoviesAndSeries?id=${id}&type=${type}`,
          {
            cache: "force-cache",
          }
        );

        const data = await res.json();
        return setDetail(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [id,type]);

  return { detail };
};
