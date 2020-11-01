// External imports
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// Internal Stylesheets
import './Home.scss';
// Assets
import logo from '../../assets/logo-RickAndMorty.svg';
import characteropedia from '../../assets/Characteropedia.svg';
import icon from '../../assets/icon-RickAndMorty-NoSearchResults.svg';
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
            className='home-header--logo'
            src={logo}
            alt='rick and morty logo'
          />
          <img
            className='home-header--character'
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
          <h3 className='search-status--no-results'>No search results. Try again!</h3>
          <img className='rendered-cards--status-icon' src={icon} alt='rick and morty no search results' />
        </div>
      ) : (
        ''
      )}
      {results ? <RenderedCards results={results} /> : ''}
    </section>
  );
};

export default Home;
