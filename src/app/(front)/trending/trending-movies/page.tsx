import CardsMoviesAndSeries from '@/components/CardsMoviesAndSeries/CardsMoviesAndSeries'
import React from 'react'


const page = () => {
  return (
    <div>
      <CardsMoviesAndSeries name='Filmes em Tendencia no momento' slug='trending-movies'/>
    </div>
  )
}

export default page