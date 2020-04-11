FROM node:12.16.0-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN ["yarn","start:prod"]


