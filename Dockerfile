FROM node:lts-alpine

WORKDIR /app

COPY yarn.lock .
COPY . .

RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]