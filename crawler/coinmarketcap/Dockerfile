FROM node:9-alpine
MAINTAINER rainu <rainu@raysha.de>

ENV NODE_ENV "production"
WORKDIR /application/

COPY ./package.json /application/
COPY ./package-lock.json /application/
COPY ./src/ /application/

RUN npm install

CMD [ "node", "/application/run.js" ]
