# Build Stage
FROM node:alpine as builder

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build


# Production Stage
FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]