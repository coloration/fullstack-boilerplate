import { Asker } from '@coloration/asker'

export const url = import.meta.env.REQUEST_URL

export const api = new Asker({
  baseUrl: url,
  after(res) {
    console.log('???', res)
    return res.data
  },
})
