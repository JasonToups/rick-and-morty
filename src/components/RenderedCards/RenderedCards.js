import React, { useState } from 'react';

import './RenderedCards.scss';
import Card from '../Card/Card';

const RenderedCards = ({ results }) => {
  // number of results
  const [count, setCount] = useState(results.info.count);
  // next url
  const [next, setNext] = useState(results.info.next);
  // amount of pages of results
  const [pages, setPages] = useState(results.info.page);
  // the result items to render
  const [items, setItems] = useState(results);

  const resultsArray = results.results;

  const mapCards = array => {
    return array.map(character => {
      // console.log(character);
      return (
        <Card
          id={character.id}
          imgSrc={character.image}
          imgAlt={character.name}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          location={character.location.name}
          episodeFirst={character.episode[0]}
        />
      );
    });
  };

  return (
    <section className='rendered-cards'>
      <div className='rendered-cards--header'>
        <h1>Number of Results: {count}</h1>
      </div>
      <div className='rendered-cards--results'>{mapCards(resultsArray)}</div>
    </section>
  );
};

export default RenderedCards;
