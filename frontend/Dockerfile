FROM node:16.13.2-alpine as dev

WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn

COPY . .

CMD ["yarn", "dev"]


FROM node:16.14-alpine as prod

WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "start"]