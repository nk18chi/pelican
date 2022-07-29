FROM node:16.10.0-slim
RUN apt-get -y update && apt-get -y install bash

WORKDIR /app/client
COPY package.json .
RUN yarn install

COPY . .
# RUN yarn build

# CMD ["yarn", "start"]
CMD ["yarn", "run", "dev"]