FROM node:10.16.2

WORKDIR /usr/src/bipubipu

COPY . ./
RUN yarn install

RUN npm run migrate:up

EXPOSE 7001

ENTRYPOINT ["yarn", "dev"]
