FROM node:4.2.2

RUN useradd -ms /bin/bash node
ADD . /home/node/src
RUN chown -R node:node /home/node

USER node
ENV HOME /home/node
WORKDIR /home/node/src

RUN npm install && \
    npm run build && \
    npm run test

EXPOSE 8081

CMD ["npm", "run", "start"]
