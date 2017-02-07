import initApp from './app/';
import config from '../../config';
import models from './models/';

initApp({ config, models })
  .then(app => console.log(`Todo server start on ${app.url}`))
  .catch(console.error);
