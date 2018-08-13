FROM node:9-alpine
MAINTAINER rainu <rainu@raysha.de>

ENV NODE_ENV "production"
WORKDIR /application

COPY ./package.json /application/
COPY ./package-lock.json /application/

COPY ./aggregator/src /application/aggregator/src
COPY ./common /application/common
COPY ./crawler /application/crawler

RUN apk --update --no-cache add python make g++ &&\
    npm install &&\
    apk del python make g++

ENTRYPOINT [ "node", "--expose-gc" ]
