import {
  connectTestDatabase,
  disconnectDataBase,
  clearDataBase,
} from './utils/database';

jest.setTimeout(30000);

beforeAll(async () => {
  await connectTestDatabase();
});

afterEach(async () => {
  await clearDataBase();
});

afterAll(async () => {
  await disconnectDataBase();
});
