FROM node:10

WORKDIR /usr/app/frontend

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "server" ]
