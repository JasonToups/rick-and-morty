import React, { useState } from 'react';
import './RenderedCards.scss';
import icon from '../../assets/icon-RickAndMorty-glow.svg';
import Card from '../Card/Card';

const RenderedCards = ({ results }) => {
  // number of results
  const count = results.info.count;
  // next url
  const [next, setNext] = useState(results.info.next);
  // the result items to render
  const [items, setItems] = useState(results.results);
  // controls loading
  const [loading, setLoading] = useState(false);
  // no data to load
  const [noData, setNoData] = useState(false);

  // INFINITE SCROLL
  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (next != null) {
        getNextCharacters(next);
      } else {
        setNoData(true);
      }
    }
  };

  const getNextCharacters = endpoint => {
    setLoading(true);
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        const newItems = items.concat(data.results);
        setItems(newItems);
        setNext(data.info.next);
        if (data.length === 0) setNoData(true);
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className='rendered-cards'>
      <div className='rendered-cards--header'>
        <h1>Number of Results: {count}</h1>
      </div>
      <div className='rendered-cards--results'>
        {items.map((character, index) => {
          return (
            <Card
              key={index.toString()}
              id={index + 1}
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
        })}
      </div>
      <div className='rendered-cards--status'>
        {loading ? <h1>loading data ...</h1> : ''}
        {noData ? <><h1>That's all Folks!</h1><img
            className='rendered-cards--status-icon'
            src={icon}
            alt='rick and morty logo'
          /></> : ''}
      </div>
    </section>
  );
};

export default RenderedCards;
