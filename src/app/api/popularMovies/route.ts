import { headers } from "@/utils/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1";

  const res = await fetch(url, headers);
  const data = await res.json();
  return NextResponse.json(data);
};
