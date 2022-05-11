import express from 'express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import cors from 'cors';
import helmet from 'helmet';

import { connectDatabase } from './utils/database';
import { createApolloServer } from './utils/apolloServer';
const app = express();
const PORT = 4000;

connectDatabase();

async function startApollo() {
  const apolloServer = createApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    path: '/graphql',
    cors: {
      origin: '*',
      methods: 'POST',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
  });
}
startApollo();

app.use(
  helmet({
    contentSecurityPolicy:
      process.env.NODE_ENV === 'production' ? undefined : false,
  })
);

app.use(cors());

app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
