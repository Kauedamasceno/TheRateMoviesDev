import React from "react";

type CardProps = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
};

const Card = ({ id, title, poster_path, name }: CardProps) => {
  return (
    <div className="h-60 w-40  rounded-lg   hover:scale-110 ">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
        className="h-full rounded-xl"
      />
      <h2 className="text-center font-bold">
        {title && title}
        {name && name}
      </h2>
    </div>
  );
};

export default Card;
