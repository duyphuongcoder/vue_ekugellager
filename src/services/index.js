import { apiBaseUrl } from '@/config/config'
// import { authHeader } from './authHeader'

export const ProductService = {
  getProduct
}

function getProduct () {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Basic WTRVNkc2M1JNMkc2RVpWNDc0WkU5WkhSVzNaWFdHM1A6',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      credentials: 'same-origin'
    }
  }
  return fetch(`${apiBaseUrl}/products/18/&output_format=JSON`, requestOptions).then(handleResponse)
  // return fetch('https://jsonplaceholder.typicode.com/todos/1', requestOptions).then(handleResponse)
  // return fetch(`${apiBaseUrl}/products/18`).then(handleResponse)
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    console.log('response test:', response)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // logout()
        location.reload(true)
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
