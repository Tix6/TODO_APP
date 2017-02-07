import mongoose from 'mongoose';
import { mongodbURI } from '../../../config';

mongoose.connect(mongodbURI);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

export default db;
