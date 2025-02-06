import Redis from 'ioredis'

export const redis = new Redis({
  host: import.meta.env.REDIS_HOSTNAME,
  port: Number(import.meta.env.REDIS_PORT),
  // password: import.meta.env.REDIS_PASSWORD,
  // db: Number(import.meta.env.REDIS_DB)
})


redis.ping()
  .then(res => console.log('Redis connected:', res))
  .catch(console.error)
