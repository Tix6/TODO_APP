import 'whatwg-fetch';
import { api } from '../../config/';

const checkStatus = (result) => {
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result;
};

const requestJson = (uri, { method = 'GET', body } = {}) => {
  const absoluteUri = `${api}/${uri}`;
  const params = { headers: { 'Content-Type': 'application/json' }, method };
  if (body) params.body = JSON.stringify(body);
  return fetch(absoluteUri, params)
          .then(checkStatus)
          .then(result => result.json());
};

export default requestJson;
