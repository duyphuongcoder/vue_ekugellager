import { apiBaseUrl, appToken } from '@/config/settings'
import { handleResponse } from './utils'

const requestOptions = {
  method: 'POST',
  headers: {
    Authorization: 'Basic ' + appToken
  }
}

export function userLogin (payload) {
  console.log(payload)
  const formData = new FormData()
  formData.append('email', payload.email)
  formData.append('password', payload.password)
  requestOptions.body = formData
  console.log(requestOptions)
  return fetch(`${apiBaseUrl}/roccomediaapi/login?output_format=JSON`, requestOptions).then(handleResponse)
}
