import { type NextRequest, NextResponse } from "next/server";

import { headers } from "@/utils/headers";

export const GET = async (request:NextRequest)=> {
  const id = request.nextUrl.searchParams.get("id")
  const type = request.nextUrl.searchParams.get('type')
  console.log(id,type)
  const url = `https://api.themoviedb.org/3/${type}/${id}?language=pt-BR`

  const res = await fetch(url, headers)

  const data = await res.json()
  return NextResponse.json(data)

}

