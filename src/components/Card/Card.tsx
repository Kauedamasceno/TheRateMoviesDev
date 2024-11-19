import Link from "next/link";
import React from "react";

type CardProps = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
};

const Card = ({ id, title, poster_path, name }: CardProps) => {
  let path = "";

  if (name) {
    path = `/serie/${id}`;
  } else {
    path = `/movie/${id}`;
  }

  return (
    <Link
      href={path}
      className="h-60 w-40 rounded-lg box-border  hover:scale-110 "
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="block rounded-xl"
      />
      <h2 className="text-center font-bold">
        {title && title}

        {name && name}
      </h2>
    </Link>
  );
};

export default Card;
