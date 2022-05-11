## Environment

- Node v16.7.0

### client

- Next.js
- Apollo
- storybook
- cypress
- Atomic Design
- Tailwind
- Jest / React Testing Library

### server

- express
- Graphql
- mongoose
- jest

### settings

- Github Action
- Circle CI
- Docker

## Development

### Docker

```
docker-compose up --build
docker-compose up // if building is already done
```

http://localhost:3000/
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

## Test

```
docker-compose exec client bash
yarn test:watch

docker-compose exec server bash
yarn test:watch
```
