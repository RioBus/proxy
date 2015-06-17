FROM node:0.11.16
EXPOSE 8080
RUN npm install -g tsd
RUN mkdir /nodets
WORKDIR /nodets