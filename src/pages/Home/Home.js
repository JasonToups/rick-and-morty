// External imports
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// Internal Stylesheets
import './Home.scss';
import '../../components/HomeHeader/HomeHeader.scss';
import '../../components/Search/Search.scss';
// Assets
import logo from '../../assets/logo-RickAndMorty.png';
import characteropedia from '../../assets/Characteropedia.png';
// Components
import RenderedCards from '../../components/RenderedCards/RenderedCards';

const Home = () => {
  const [results, setResults] = useState(null);
  const [noData, setNoData] = useState(null);
  const [sentQuery, setSentQuery] = useState(false);
  const [stringQuery, setStringQuery] = useState('');
  const { register, handleSubmit, reset } = useForm();

  const api = 'https://rickandmortyapi.com/api/character/';

  // Requests the first 20 results of the entire Rick and Morty character list.
  useEffect(() => {
    setResults(getCharacters(api));
  }, []);

  const getCharacters = endpoint => {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.error('Error:', data.error);
          setNoData(true);
          setResults('');
        } else {
          console.log('Success:', data);
          setNoData(false);
          setResults(data);
          console.log(noData);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setNoData(true);
      });
  };

  const onSubmit = data => {
    if (!data.characterName && !data.status && !data.gender) {
      setSentQuery(false);
    } else {
      setSentQuery(true);
    }
    // Creates the api query string to make the request
    const query = `${api}?name=${data.characterName}&status=${data.status}&gender=${data.gender}`;
    setResults(getCharacters(query));
    // Creates the query results info to render on the dom.
    const templateQuery = `${data.characterName} ${data.status} ${data.gender}`;
    setStringQuery(templateQuery);
    // Resets the form
    reset();
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
                name='status'
                ref={register}>
                <option disabled hidden selected>
                  mortal options
                </option>
                <option value=''>None</option>
                <option value='alive'>Alive</option>
                <option value='dead'>Dead</option>
                <option value='unknown'>Unknown</option>
              </select>
            </div>
            <div className='form-group'>
              <label className='form-label'>Gender</label>
              <select
                className='form-field'
                type='dropdown'
                name='gender'
                ref={register}>
                <option disabled hidden selected>
                  select a gender
                </option>
                <option value=''>None</option>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
                <option value='genderless'>Genderless</option>
                <option value='unknown'>Unknown</option>
              </select>
            </div>
            <input
              className='submit-button'
              type='submit'
              value='Submit'></input>
          </form>
        </div>
      </section>
      {sentQuery ? (
        <div className='search-status'>
          <h3>Searched for: {stringQuery}</h3>
        </div>
      ) : (
        ''
      )}
      {noData ? (
        <div className='search-status'>
          <h3>There were no search results. Try again.</h3>
        </div>
      ) : (
        ''
      )}
      {results ? <RenderedCards results={results} /> : ''}
    </section>
  );
};

export default Home;
