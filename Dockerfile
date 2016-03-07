FROM node:5.7.0
EXPOSE 8080
ADD . /app
WORKDIR /app
RUN npm install
ENTRYPOINT npm start