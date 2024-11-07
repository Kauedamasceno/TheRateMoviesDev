import React from "react";

type CardProps = {
  id: number;
  title: string;

  poster_path: string;
};

const Card = ({ id, title, poster_path }: CardProps) => {
  return (
    <div className='h-60 m-10 rounded-lg   hover:scale-110 '>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={title}
        className='h-full rounded-xl'
      />
      <h2 className='text-center font-bold'>{title}</h2>
    </div>
  );
};

export default Card;
