FROM node:latest
EXPOSE 8080
EXPOSE 80
RUN npm install -g mocha
RUN mkdir /app
WORKDIR /app
