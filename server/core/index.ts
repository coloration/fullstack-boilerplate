import { Hono } from 'hono'
import { cors } from 'hono/cors'

export const app = new Hono()


app.use(
  '*',
  cors({
    origin: '*', // 允许所有来源
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // 允许的 HTTP 方法
    allowHeaders: ['Content-Type', 'Authorization'], // 允许的自定义头
  })
)
