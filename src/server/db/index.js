import mongoose from 'mongoose';

const dbPromise = uri => (new Promise((resolve) => {
  mongoose.Promise = global.Promise;
  mongoose.connect(uri);
  resolve(mongoose.connection);
}));

const initDb = ({ mongodbURI }) => dbPromise(mongodbURI);

export default initDb;
