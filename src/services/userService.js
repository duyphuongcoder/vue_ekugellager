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
export function newAddress (payload, user) {
  var formData = new FormData()
  formData.append('id_customer', user.id)
  formData.append('alias', payload.alias)
  formData.append('firstname', payload.first_name)
  formData.append('lastname', payload.last_name)
  formData.append('company', payload.company)
  formData.append('vat_number', payload.vat_number)
  formData.append('address1', payload.address)
  formData.append('address2', payload.address_code)
  formData.append('postcode', payload.zip_postal_code)
  formData.append('city', payload.city)
  formData.append('id_country', 1)
  formData.append('phone', payload.phone)
  requestOptions.body = formData
  return fetch(`${apiBaseUrl}/roccomediaapi/addaddress?output_format=JSON`, requestOptions).then(handleResponse)
}
