FROM node:9-alpine
MAINTAINER rainu <rainu@raysha.de>

ENV NODE_ENV "production"
WORKDIR /application/

COPY ./package.json /application/
COPY ./package-lock.json /application/
COPY ./common /application/common

COPY ./coinmarketcap/ /application/coinmarketcap
COPY ./coinmarketcap.js /application/coinmarketcap.js

COPY ./coinbase/ /application/coinbase
COPY ./coinbase.js /application/coinbase.js

RUN npm install

ENTRYPOINT [ "node" ]
