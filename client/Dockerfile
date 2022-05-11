FROM node:16.7.0-alpine3.14
RUN apk update && apk add bash

WORKDIR /app/client
COPY package.json .
RUN yarn install

CMD ["yarn", "run", "dev"]