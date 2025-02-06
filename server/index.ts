import { serve } from 'bun'
import { app } from './core'
import './router'

serve({
  fetch: app.fetch,
  port: Number(import.meta.env.PORT)
})


console.log(`listen at ${import.meta.env.PORT} port.`)

