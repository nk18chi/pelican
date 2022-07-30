FROM nginx:1.23.0
COPY nginx.conf /etc/nginx/conf.d/
RUN rm /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]