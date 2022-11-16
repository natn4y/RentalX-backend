FROM node

WORKDIR usr/app

COPY package.json ./

RUN apt-get update -qq && apt-get install -y build-essential nodejs

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]