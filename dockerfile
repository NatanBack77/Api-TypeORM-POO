FROM node:20-slim

USER node

RUN mkdir /home/node/type

WORKDIR /home/node/type

COPY . .

EXPOSE 8080

CMD [ "/home/node/type/.docker/dev.sh" ]


