import { MongoClient } from 'mongodb'
import config from '../config'

const {
    MONGO_HOST,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_PORT,
    MONGO_DBNAME,
    MONGO_LOCAL,
} = config

let MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}?authSource=admin`;

if (MONGO_LOCAL) {
  MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`;
}

export const client = new MongoClient(MONGO_URI);
export const db = client.db();
