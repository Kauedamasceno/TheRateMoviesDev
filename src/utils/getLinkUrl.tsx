import { Slug } from './getApiURl';

export const GetUrlLink = (slug: Slug) => {
  switch (slug) {
    case "trending-movies":
      return "/trending/trending-movies";
    case "trending-series":
      return "/trending/trending-series";
    case "popular-movies":
      return "/popular/popular-movies";
    case "popular-series":
      return "/popular/popular-series";
    case "discovery":
      return "/discovery";
    case 'top-rated-movies':
    return "/top-rated/top-rated-movies";
    case 'top-rated-series':
      return "/top-rated/top-rated-series";


    default:
  }
};
