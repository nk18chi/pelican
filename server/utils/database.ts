import { connect, ConnectOptions, connection, disconnect } from 'mongoose';
import config from 'config';
import { MongoMemoryServer } from 'mongodb-memory-server';

const MONGO_URI: string = config.get('DATABASE.URI');

export const connectDatabase = async () => {
  try {
    await connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log('Successfuly connected to mongo', MONGO_URI);
  } catch (e) {
    console.log('Error connecting to mongo', e);
  }
};

let mongod: MongoMemoryServer;
export const connectTestDatabase = async () => {
  try {
    mongod = await MongoMemoryServer.create();
    const MONGO_TEST_URI = mongod.getUri();

    console.log('MONGO_TEST_URI', MONGO_TEST_URI);
    await connect(MONGO_TEST_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  } catch (e) {
    console.log('Error connecting to mongo', e);
  }
};

export const clearDataBase = async () => {
  await connection.dropDatabase();
};

export const disconnectDataBase = async () => {
  if (mongod) await mongod.stop();
  await disconnect();
};
