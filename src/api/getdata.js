import { get } from '@/api/config.js'

export const getmodule = () => {
  return get('http://127.0.0.1:8888/')
}
