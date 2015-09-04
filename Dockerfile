FROM    nginx:1.7
MAINTAINER  "Andre Duis" <duis@cleverbridge.com>

RUN npm install && npm run build

ADD build /build
ADD conf/nginx.conf /etc/nginx/conf/nginx.conf

EXPOSE  80
CMD     ["nginx", "-g", "daemon off;"]