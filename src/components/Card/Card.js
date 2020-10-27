import React from 'react';
import './Card.scss';

const Card = ({
  id,
  imgSrc,
  imgAlt,
  name,
  species,
  gender,
  status,
  location,
  episodeFirst,
  episodes,
}) => {
  return (
    <div className='card' key={id}>
      <div className='card-image--wrapper'>
        <img className='card-image' src={imgSrc} alt={imgAlt} />
      </div>
      <div className='card-body'>
        <h2>
          #{id} - {name}
        </h2>
        <h3>
          {status} - {species} - {gender}
        </h3>
        <p>Last known location:</p>
        <p>{location}</p>
        <p>First seen in:</p>
        <p>episode {episodeFirst}</p>
      </div>
    </div>
  );
};

export default Card;
