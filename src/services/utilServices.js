import axios from 'axios';

export const callApi = async ({ endpoint, method = 'get', params }) => {
  let api = `https://rickandmortyapi.com/api/${endpoint}`;
  if (/https|http?/.test(endpoint)) api = endpoint;

  let response;

  try {
    response = await axios({
      method: method,
      url: api,
      params,
    });
  } catch (error) {
    throw error;
  }

  return { ...response };
};
