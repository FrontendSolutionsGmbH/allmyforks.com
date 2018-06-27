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

COPY ./binance/ /application/binance
COPY ./binance.js /application/binance.js

COPY ./bitfinex/ /application/bitfinex
COPY ./bitfinex.js /application/bitfinex.js
COPY ./bitfinex_ticker.js /application/bitfinex_ticker.js

COPY ./okex/ /application/okex
COPY ./okex.js /application/okex.js
COPY ./okex_ticker.js /application/okex_ticker.js

COPY ./fiat/ /application/fiat
COPY ./fiat.js /application/fiat.js

RUN npm install

ENTRYPOINT [ "node" ]
