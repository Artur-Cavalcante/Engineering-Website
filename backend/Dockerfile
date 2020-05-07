FROM node:10

WORKDIR /usr/app/backend

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
