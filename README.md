# fullstack development boilerplate

项目基于 Vite(Vue), Bun(Hono), MySQL, Redis实现

## 部署

``` bash
$ docker compose -f docker-compose.prod.yml up -d
```

## 开发

### server-end

``` bash
$ docker-compose -f docker-compose.db.yml up -d
$ cd server

# first install
server$ bun install

server$ bun run dev
```

### front-end

``` bash
$ docker-compose -f docker-compose.server.yml up -d
$ cd web
web$ pnpm dev

##
web$ pnpm i
```


## Ref

