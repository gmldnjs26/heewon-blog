FROM node:16.13.2-alpine

WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn

COPY . .

# RUN yarn build

# CMD ["yarn", "start"]

CMD ["yarn", "dev"]