export type Slug =
  | "trending-movies"
  | "trending-series"
  | "popular-movies"
  | "popular-series"
  | "discovery"
  | "top-rated-movies"
  | "top-rated-series";

type getApiUrlProps = {
  slug: Slug;
  page: number;
};

export const GetApiUrl = ({ slug, page }: getApiUrlProps) => {
  switch (slug) {
    case "trending-movies":
      return `/api/trendingMovies`;
    case "trending-series":
      return `/api/trendingSeries`;
    case "popular-movies":
      return `/api/popularMovies?page=${page}`;
    case "popular-series":
      return `/api/popularSeries?page=${page}`;
    case "discovery":
      return `/api/comingUp?page=${page}`;
    case "top-rated-movies":
      return `/api/topRatedMovies?page=${page}`;
    case "top-rated-series":
      return `/api/topRatedSeries?page=${page}`;

    default:
  }
};
