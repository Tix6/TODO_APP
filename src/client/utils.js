import axios from 'axios';
import { api } from '../../config/';

axios.defaults.baseURL = api;
axios.defaults.headers = {
  'Content-Type': 'application/json',
};

const checkStatus = (response) => {
  const { status, statusText } = response;
  if (status !== 200) {
    throw new Error(statusText);
  }
  return response;
};

const requestJson = (endpoint, { method = 'GET', body } = {}) =>
  axios({
    url: endpoint,
    method,
    data: body,
    withCredentials: false,
  }).then(checkStatus).then(response => response.data);

export default requestJson;
