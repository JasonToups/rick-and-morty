import React, { useState } from 'react';
import './RenderedCards.scss';
import Card from '../Card/Card';
// import characters from '../../api/characters';

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
      if (!noData) {
        getNextCharacters(next);
      }
    }
  };

  // TODO this function errors when it's time to map through the results and render cards, saying that the properties don't exist. Follow this guide to get infinite scrolling to work. https://dev.to/syakirurahman/react-infinite-scroll-tutorial-with-and-without-a-library-1abg
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
        {loading ? (
          <h1>loading data ...</h1>
        ) : (
          <h1>pull up for more laughs!</h1>
        )}
        {noData ? <h1>that's all folks!</h1> : ''}
      </div>
    </section>
  );
};

export default RenderedCards;
