import React from 'react';

const Card = ({ flag, name, population, region, capital }) => {
  return(
    <div className='bg-light-green tc ma2 grow shadow-5 br3 w-100 w-50-m w-25-l '>
      <img className='br3 br--top' style={{height: '200px', width: '100%', objectFit: 'cover'}} src={flag} alt="germany" />
      <div className='tl pa3 br3'>
        <h2>{name}</h2>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </div>
  );
}

export default Card;