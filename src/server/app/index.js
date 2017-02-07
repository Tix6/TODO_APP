import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import cookieParser from 'cookie-parser';
import uuid from 'uuid';
import R from 'ramda';
// import favicon from 'serve-favicon';
import compression from 'compression';
import bodyParser from 'body-parser';
import logger from 'morgan';
import initApi from './api/';
// import Connector from './connector';
import middlewares from '../app/middlewares/';

const getUrl = server => `http://${server.address().address}:${server.address().port}`;

const initApp = ({ config } = {}) => {
  const { publicPath, buildPath, server: { back: { host, port } } } = config;
  const app = express();

  const session = (req, res, next) => {
    let id = R.path(['cookies', 'todoAppId'], req);
    if (!id) {
      id = uuid.v4();
      res.cookie('todoAppId', id);
    }
    req.user = { id };
    next();
  };

  const httpServer = http.createServer(app);
  const io = socketIO(httpServer);

  // app.connector = new Connector(io);

  const promise = new Promise((resolve) => {
    app.disable('etag')
      .use(compression())
      .use(bodyParser.json())
      .use(cookieParser())
      .use(session)
      .use(middlewares.headers)
      // .use(favicon(path.join(publicPath, '/favicon.ico')))
      .use('/build', express.static(buildPath))
      .use('/public', express.static(publicPath))
      .use('/ping', (req, res) => res.json({ ping: 'pong' }))
      .use('/sessions', (req, res) => res.json(app.connector.getSessions()))
      .use(logger('dev'))
      .use('/api', initApi())
      .use(middlewares.errors)
      .use((req, res) => res.redirect('/public/index.html'));

    httpServer.listen(port, host, () => {
      app.config = config;
      app.url = getUrl(httpServer);
      resolve(app);
    });
  });

  return promise;
};

export default initApp;
