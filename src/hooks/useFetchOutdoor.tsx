
import { useEffect,useState } from "react";

type dataType = {
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
};

type useFetchOutdoorProps = {
  click: number;
};

export const useFetchOutdoor = ({ click }: useFetchOutdoorProps) => {
  const [numberOutdoor, setNumberOutdoor] = useState<dataType | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/popularMovies`, {cache: 'force-cache'});
        if (!response.ok) {
          throw new Error("Network response wasn´t ok");
        }

        const data = await response.json();

        setNumberOutdoor(data.results[click]);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [click]);

  return {numberOutdoor}
};
