import React from 'react';

const getCharacters = endpoint => {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

export default getCharacters;
