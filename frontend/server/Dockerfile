FROM node:10

WORKDIR /usr/app/frontend

COPY package.json ./

RUN yarn install 

COPY . .

EXPOSE 3333

CMD ["yarn", "server"]
