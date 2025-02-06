import type { Context } from 'hono'
import { app } from '../core'
import { db } from '../database/mysql'
import { redis } from '../database/redis'

async function getDemo(c: Context) {
  const id = c.req.param('id')

  const demo = await db('demos').where({ id }).first()
  return c.json({
    data: demo
  })
}

app.get('/demos', async (c) => {
  const demos = await db('demos').select('*')

  return c.json({ data: demos })
})

app.get('/demos/:id', getDemo)

app.post('/demos', async (c) => {
  const post = await c.req.json()


  const [insertId] = await db('demos').insert({ name: post.name })

  const demo = await db('demos').where({ id: insertId }).first()
  return c.json({
    data: demo
  })
})

app.delete('/demos/:id', async (c) => {
  const id = c.req.param('id')

  await db('demos').where({ id }).del()
  return c.json({
    data: null
  })
})

app.put('/demos/:id', async (c) => {
  const id = c.req.param('id')
  const post = await c.req.json()


  await db('demos')
    .where({ id })         // 条件
    .update({ name: post.name }) // 更新内容

  return await getDemo(c)
})


app.get('/demo/redis-test', async (c) => {

  await redis.set('test', 'hello world')

  return c.json({
    data: 'ok'
  })
})
