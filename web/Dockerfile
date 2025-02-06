FROM node:20-alpine AS build-stage

WORKDIR /app
#
RUN apk add --no-cache git \
    && npm config set -g registry https://registry.npmmirror.com \
    && npm i pnpm -g

COPY .npmrc package.json ./
RUN pnpm install

COPY . .
RUN pnpm build

FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx.temp.conf /etc/nginx/conf.d/website.conf

EXPOSE 9701

CMD ["nginx", "-g", "daemon off;"]
