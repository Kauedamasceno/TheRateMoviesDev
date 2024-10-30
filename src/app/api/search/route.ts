import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { headers } from "@/utils/headers";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams.get("query");
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchParams}&include_adult=false&language=pt-BR&page=1`;

  const res = await fetch(url, headers);

  const data = await res.json();
  return NextResponse.json(data);
};
