'use server'
export const searchFormAction = async (formData: FormData) => {
  const search = formData.get('search');
  
  // Corrected API path
  const data = await fetch(`${process.env.URL_BASE}/api/search?query=${search}`); 
  
  console.log(await data.json())

};