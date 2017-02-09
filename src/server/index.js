import initDb from './db';
import initApp from './app/';
import config from '../../config';

Promise.all([initApp(config), initDb(config)])
  .then(([app, db]) => {
    db.on('error', console.error);
    console.log(`Todo server start on ${app.url}`);
  })
  .catch(console.error);
