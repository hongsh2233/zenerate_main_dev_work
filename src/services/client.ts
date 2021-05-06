import axios, { AxiosResponse } from 'axios'
import { AxiosPromise } from 'axios'

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://devmain.zenerate.ai/api'
    : 'http://devmain.zenerate.ai/api'

const apiClient = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json, x-access-token',
    // 'Accept-Encoding': 'gzip',
    'Content-type': 'application/json',
  },
})

export type ApiReturnType = {
  success: boolean
  message: string
  errors: any
  body: Record<string, any>
}

const req = (reqPromise): Promise<AxiosPromise<ApiReturnType>> => {
  return reqPromise
    .then((res) => {
      res.config.data = {}
      return Promise.resolve(res)
    })
    .catch((err) => {
      if (err.response) err.message = err.response.data.message
      return Promise.reject(err)
    })
}

export default {
  req,
  apiClient,
}
