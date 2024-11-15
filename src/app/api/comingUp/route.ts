import { type NextRequest, NextResponse } from "next/server";

import { headers } from "@/utils/headers";
export const GET = async (params: NextRequest) => {
  const page = params.nextUrl.searchParams.get("page");
  const url = `https://api.themoviedb.org/3/movie/upcoming?language=pt_BR&page=${page}`;
  console.log(url)
  const res = await fetch(url, headers);
  const data = await res.json();
  return NextResponse.json(data);
};