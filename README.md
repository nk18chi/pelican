## Environment

- Node v16.10.0

### client

- Next.js
- Apollo
- storybook
- cypress
- Atomic Design
- Chakura
- Jest / React Testing Library

### server

- express
- Graphql
- mongoose
- jest

### settings

- Github Action
- Docker

## Development

add env.local in server

```
NODE_ENV=development
```

### Docker

```
docker-compose down
docker-compose --env-file .env up --build
docker-compose --env-file .env up -d // if building is already done

## only once
docker-compose exec mongodb bash
/mongo/setup.sh
```

http://localhost:3000  
http://localhost:4000/graphql  
http://localhost:6006/

#### Troble Shooting

Error
`mongodb-seed_1: setup.sh: Permission denied`

Solution

```
chmod +x mongo/setup.sh
docker-compose up --build
```

Error
Read timed out. (read timeout=60)

Restart docker or run the command in the following link  
https://stackoverflow.com/a/52135934/9792009

## Test

```
docker-compose exec client bash
yarn test:watch

docker-compose exec server bash
yarn test:watch
```
