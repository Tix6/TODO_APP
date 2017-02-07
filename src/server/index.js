import db from './db';
import initApp from './app/';
import config from '../../config';

initApp({ config })
  .then(app => console.log(`Todo server start on ${app.url}`))
  .catch(console.error);
