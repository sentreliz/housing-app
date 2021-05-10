FROM nginx:alpine
LABEL author="Sumanth Hathwar"
COPY ./build /var/www/
COPY default.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]