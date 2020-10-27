import React from 'react';

import './RenderedCards.scss';
import Card from '../Card/Card';

const RenderedCards = ({ results }: { [key: string]: any }) => {
  const resultsInfo = results.info;
  const count = resultsInfo.count;
  const pages = resultsInfo.pages;
  const next = resultsInfo.next;
  const prev = resultsInfo.prev;

  const resultsArray = results.results;

  const newArray = [{ number: 'one' }, { number: 'two' }, { number: 'three' }];
  console.log(newArray.length);

  const renderCards = (array: object[], info: object) => {
    const returnArray = [];
    console.log('rendering cards');
    interface infoValue {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    }
    function printInfo(info: infoValue) {
      console.log(info.count);
      console.log(info.pages);
      console.log(info.next);
      console.log(info.prev);
    }
    interface arrayValue {
      id: number;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: object;
      location: object;
      image: string;
      episode: string[];
      url: string;
      created: string;
    }
    for (let x = 0; x < resultsArray.length; x++) {
      console.log(resultsArray[x].image);
      console.log(resultsArray[x].name);
      console.log(resultsArray[x].species);
      console.log(resultsArray[x].gender);
      console.log(resultsArray[x].status);
      console.log(resultsArray[x].location);
      console.log(resultsArray[x].episode[0]);
      console.log(resultsArray[x].episode);
    }

    function printArray(array: arrayValue) {}

    printInfo(resultsInfo);
    printArray(resultsArray);
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
