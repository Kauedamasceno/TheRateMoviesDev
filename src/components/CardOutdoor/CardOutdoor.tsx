import Link from "next/link";
import React from "react";

type CardOutDoorProps = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
};

const CardOutdoor = ({
  id,
  overview,
  title,
  vote_average,
}: CardOutDoorProps) => {
  return (
    <div className="w-full flex flex-col justify-around">
      <h2 className="text-8xl font-bold text-orange-600 max-lg:text-4xl">
        {title}
      </h2>

      <div className="flex flex-col gap-6">
        <p className="text-3xl max-lg:text-xl">{overview}</p>
        <p className="flex gap-1 text-xl items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill text-yellow-500"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          {(vote_average / 2).toFixed(2)}
        </p>
        <Link
          href={`/movie/${id}`}
          className="text-4xl font-bold  text-orange-600 max-lg:text-2xl "
        >
          Saiba mais
        </Link>
      </div>
    </div>
  );
};

export default CardOutdoor;
