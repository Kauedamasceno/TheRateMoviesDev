"use client";
import { useState } from "react";

import * as handlesOutdoor from "@/utils/handleClickOutdoor";

import { useFetchOutdoor } from "../../hooks/useFetchOutdoor";
import CardOutdoor from "../CardOutdoor/CardOutdoor";

const OutDoor = () => {
  const [click, setClick] = useState<number>(0);
  const { numberOutdoor } = useFetchOutdoor({ click });

  return (
    <div className="h-screen w-full p-14 flex relative max-lg:h-full max-lg:flex-col-reverse max-lg:gap-3 ">
      {click < 6 && (
        <div
          className="absolute top-2/4 right-7 rounded-full bg-orange-600 "
          onClick={() => setClick((r) => handlesOutdoor.handleClickAdd(r))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-arrow-right-circle h-8 "
            viewBox="0 0 16 16"
          >
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </div>
      )}
      {click > 0 && (
        <div
          className="absolute top-2/4 left-7 rounded-full bg-orange-600 "
          onClick={() =>
            setClick((r) => handlesOutdoor.handleClickDescrease(r))
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-arrow-left-circle h-8"
            viewBox="0 0 16 16"
          >
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </div>
      )}
      {numberOutdoor && (
        <CardOutdoor
          id={numberOutdoor.id}
          overview={numberOutdoor.overview}
          poster_path={numberOutdoor.poster_path}
          title={numberOutdoor.title}
          vote_average={numberOutdoor.vote_average}
        />
      )}

      <img
        className="h-full max-lg:h-[50%]"
        src={`https://image.tmdb.org/t/p/original/${numberOutdoor?.poster_path}`}
      />
    </div>
  );
};

export default OutDoor;
