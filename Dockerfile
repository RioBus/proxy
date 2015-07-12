FROM node:0.11.16
EXPOSE 8080
EXPOSE 80
RUN npm install -g gulp mocha pm2 tsd
RUN mkdir /app
WORKDIR /app