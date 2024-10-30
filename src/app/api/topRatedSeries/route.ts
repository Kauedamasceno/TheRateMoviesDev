import { NextResponse } from "next/server";
import { headers } from "@/utils/headers";

export const GET = async () => {
  const url = "https://api.themoviedb.org/3/tv/top_rated?language=pt-BR&page=1";
  const res = await fetch(url, headers);
  const data = await res.json();
  return NextResponse.json(data);
};
