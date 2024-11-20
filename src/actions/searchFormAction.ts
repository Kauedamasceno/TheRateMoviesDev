'use server'

import { redirect } from 'next/navigation';

export const searchFormAction = async (formData: FormData) => {
  const search = formData.get('search');
  console.log(search)
  // Corrected API path
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search?query=${search}`); 
  console.log(await data.json())
  redirect(`/search/${search}`)
  

};