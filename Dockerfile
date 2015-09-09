FROM node:4.0.0
EXPOSE 8080
EXPOSE 80
RUN npm install -g mocha gulp
RUN mkdir /app
WORKDIR /app
