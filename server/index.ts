import { serve } from 'bun'
import { app } from './core'
import './router'

serve({
  fetch: app.fetch,
  port: Number(import.meta.env.port) || 9750
})

