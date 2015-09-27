FROM sinet/nginx-node:0.12.4

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install
RUN npm run build

ADD nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
