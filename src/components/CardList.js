import React from 'react';
import Card from './Card';

const CardList = ({countries}) => {
  const cardComponent = countries.map((country, index) => {
    return(
      <Card 
        key={index}
        flag={country.flag}
        name={country.name}
        region={country.region}
        population={country.population}
        capital={country.capital}
      />
    );
  })

  return(
    <div className='flex flex-wrap justify-center-ns'>
      {cardComponent}
    </div>
  )
}

export default CardList;