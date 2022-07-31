FROM node:16.10.0-slim
RUN apt-get -y update && apt-get -y install bash

WORKDIR /app/client
COPY package.json .
RUN yarn install

COPY . .
ENTRYPOINT ./run-app.sh