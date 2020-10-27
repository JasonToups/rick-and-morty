import React, { useState, useEffect } from 'react';

import './Home.scss';
import '../../components/HomeHeader/HomeHeader.scss';
import '../../components/Search/Search.scss';
import logo from '../../assets/logo-RickAndMorty.png';
import characteropedia from '../../assets/Characteropedia.png';

import RenderedCards from '../../components/RenderedCards/RenderedCards';

const Home = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    setResults(getCharacters('https://rickandmortyapi.com/api/character/'));
  }, []);

  const getCharacters = () => {
    const api = 'https://rickandmortyapi.com/api/character/';
    fetch(api)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setResults(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <section>
      <section className='home-header'>
        <div className='logos'>
          <img
            className='home-header--image'
            src={logo}
            alt='rick and morty logo'
          />
          <img
            className='home-header--image'
            src={characteropedia}
            alt='characteropedia'
          />
        </div>
        <div className='search-form'>
          <form>
            <input
              className='search-field'
              type='text'
              placeholder='Search for a character'></input>
            <input
              className='submit-button'
              type='submit'
              value='submit'></input>
          </form>
        </div>
      </section>
      {results ? <RenderedCards results={results} /> : <h1>Loading Results</h1>}
    </section>
  );
};

export default Home;
