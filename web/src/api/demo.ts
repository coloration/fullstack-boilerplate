import { api } from './core'

export function demoList() {
  return api.get('/demos')
}

export function demoDelete(id: number) {
  return api.delete(`/demos/${id}`)
}

export function demoCreate(name: string) {
  return api.post(`/demos`, { name })
}

export function demoModify(id: number, name: string) {
  return api.put(`/demos/${id}`, { name })
}
