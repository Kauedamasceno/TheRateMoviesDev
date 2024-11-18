'use server'

import { redirect } from 'next/navigation';

export const searchFormAction = async (formData: FormData) => {
  const search = formData.get('search');
  console.log(search)
  // Corrected API path
  const data = await fetch(`${process.env.URL_BASE}/api/search?query=${search}`); 
  redirect(`/search/${search}`)
  
  console.log(await data.json())

};