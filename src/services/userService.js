import { apiBaseUrl, appToken } from '@/config/settings'
import { handleResponse } from './utils'

const requestOptions = {
  method: 'POST',
  headers: {
    Authorization: 'Basic ' + appToken
  }
}
const getRequestOptions = {
  method: 'GET',
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
export function forgotPassword (email) {
  var formData = new FormData()
  formData.append('email', email)
  requestOptions.body = formData
  return fetch(`${apiBaseUrl}/roccomediaapi/forgotpassword?output_format=JSON`, requestOptions).then(handleResponse)
}
export function logout (payload) {
  const formData = new FormData()
  formData.append('id_customer', payload.id_customer)
  requestOptions.body = formData
  return fetch(`${apiBaseUrl}/roccomediaapi/logout`, requestOptions).then(handleResponse)
}
export function getAddresses (id) {
  return fetch(`${apiBaseUrl}/roccomediaapi/getaddresses?id_customer=${id}&output_format=JSON`, getRequestOptions).then(handleResponse)
}
export function newAddress (payload) {
  var formData = new FormData()
  for (var key in payload) {
    formData.append(key, payload[key])
  }
  requestOptions.body = formData
  return fetch(`${apiBaseUrl}/roccomediaapi/addaddress?output_format=JSON`, requestOptions).then(handleResponse)
}
