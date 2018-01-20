FROM node:6
EXPOSE 3000
COPY ./ /
ENTRYPOINT npm install; npm start;