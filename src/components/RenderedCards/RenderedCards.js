import React from 'react';

import './RenderedCards.scss';
import Card from '../Card/Card';

const RenderedCards = ({ results }) => {
  const resultsInfo = results.info;
  const count = resultsInfo.count;
  const pages = resultsInfo.pages;
  const next = resultsInfo.next;
  const prev = resultsInfo.prev;
  const returnArray = [];

  const resultsArray = results.results;

  const renderCards = (array, info) => {
    console.log('rendering cards');

    function printInfo(info) {
      console.log(info.count);
      console.log(info.pages);
      console.log(info.next);
      console.log(info.prev);
    }

    for (let x = 0; x < array.length; x++) {
      console.log(array[x].image);
      console.log(array[x].name);
      console.log(array[x].species);
      console.log(array[x].gender);
      console.log(array[x].status);
      console.log(array[x].location);
      console.log(array[x].episode[0]);
      console.log(array[x].episode);
      console.log(array[x].id);
      returnArray.push(
        <Card
          key={array[x].id}
          imgSrc={array[x].image}
          imgAlt={array[x].name}
          name={array[x].name}
          status={array[x].status}
          species={array[x].species}
          gender={array[x].gender}
          location={array[x].location}
          episode={array[x].episode[0]}
        />,
      );
    }
    console.log(returnArray);
    return returnArray;
  };
  renderCards(resultsArray, resultsInfo);

  return (
    <section className='rendered-cards'>
      <div className='rendered-cards--header'>
        <h1>Number of Results: {count}</h1>
      </div>
      <div className='rendered-cards--results'>
        <Card
          imgSrc='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          imgAlt='Rick Sanchez'
          name='Rick Sanchez'
          status='Alive'
          species='Human'
          gender='Male'
          location='Earth (Replacement Dimension)'
          episode='1'
        />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default RenderedCards;
