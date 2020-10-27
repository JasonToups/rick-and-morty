import axios from 'axios';

export default {
  getNextCharacters: async function (endpoint) {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
