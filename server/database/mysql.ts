import knex from 'knex'

// 配置 Knex
export const db = knex({
  client: 'mysql2',
  connection: {
    host: import.meta.env.DATABASE_HOSTNAME,
    user: import.meta.env.DATABASE_USERNAME,
    password: import.meta.env.DATABASE_PASSWORD,
    database: import.meta.env.DATABASE_NAME,
    port: Number(import.meta.env.DATABASE_PORT)
  },
})

// 测试连接
db.raw('SELECT 1')
  .then(() => {

    console.log('Connected to MySQL via Knex!')

    db.raw(`
      CREATE TABLE IF NOT EXISTS demos (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `)
    .then(() => {
      console.log('init demos table')
    })
  })
  .catch((err) => {
    console.error('Knex connection failed:', err)
  })
