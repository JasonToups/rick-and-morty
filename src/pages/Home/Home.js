import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import './Home.scss';
import '../../components/HomeHeader/HomeHeader.scss';
import '../../components/Search/Search.scss';
import logo from '../../assets/logo-RickAndMorty.png';
import characteropedia from '../../assets/Characteropedia.png';

import RenderedCards from '../../components/RenderedCards/RenderedCards';

const Home = () => {
  const [results, setResults] = useState(null);
  const [characterName, setCharacterName] = useState('');
  const { register, handleSubmit, reset } = useForm();

  const api = 'https://rickandmortyapi.com/api/character/';

  useEffect(() => {
    setResults(getCharacters(api));
    reset();
  }, []);

  const getCharacters = endpoint => {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setResults(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const onSubmit = data => {
    // if (data.characterName) {
    setCharacterName(data.characterName);
    let status = data.status;
    console.log(status);
    // }
    setResults(
      getCharacters(`${api}?name=${data.characterName}&status=${status}`),
    );
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <label className='form-label'>Name</label>
              <input
                className='form-field'
                type='search'
                placeholder='Search for a character'
                name='characterName'
                ref={register}></input>
            </div>
            <div className='form-group'>
              <label className='form-label'>Status</label>
              <select
                className='form-field'
                type='dropdown'
                placeholder='Mortal Status'
                name='status'
                ref={register}>
                <option value=''>None</option>
                <option value='alive'>Alive</option>
                <option value='dead'>Dead</option>
                <option value='unknown'>Unknown</option>
              </select>
            </div>
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
