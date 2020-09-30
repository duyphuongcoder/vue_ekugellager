import { apiBaseUrl, appToken } from '@/config/settings'
import { handleResponse } from './utils'

const requestOptions = {
  method: 'POST',
  headers: {
    Authorization: 'Basic ' + appToken
  }
}

export function login (payload) {
  const formData = new FormData()
  formData.append('email', payload.email)
  formData.append('password', payload.password)
  requestOptions.body = formData
  return fetch(`${apiBaseUrl}/roccomediaapi/login?output_format=JSON`, requestOptions).then(handleResponse)
}

export function register (payload) {
  const formData = new FormData()
  let key
  for (key in payload) {
    formData.append(key, payload[key])
  }
  requestOptions.body = formData
  return fetch(`${apiBaseUrl}/roccomediaapi/register`, requestOptions).then(handleResponse)
}

export function logout (payload) {
  const formData = new FormData()
  formData.append('id_customer', payload.id_customer)
  requestOptions.body = formData
  return fetch(`${apiBaseUrl}/roccomediaapi/logout`, requestOptions).then(handleResponse)
}
