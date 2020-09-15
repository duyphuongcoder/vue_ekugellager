import { apiBaseUrl, appToken } from '@/config/config'

export const ProductService = {
  getTopIcons,
  getProduct
}

const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: 'Basic ' + appToken
  }
}

function getTopIcons () {
  return fetch(`${apiBaseUrl}/rocctoppernavbar&language=1&output_format=JSON`, requestOptions).then(handleResponse)
}

function getProduct () {
  return fetch(`${apiBaseUrl}/products/18/&output_format=JSON`, requestOptions).then(handleResponse)
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
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
