import {
  connectTestDatabase,
  disconnectDataBase,
  clearDataBase,
} from './database';

beforeAll(async () => {
  await connectTestDatabase();
});

afterEach(async () => {
  await clearDataBase();
});

afterAll(async () => {
  await disconnectDataBase();
});
