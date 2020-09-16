import { apiBaseUrl, appToken } from '@/config/config'

export const Services = {
  getTopIcons,
  getProduct
}

const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: 'Basic ' + appToken
  }
}

function getTopIcons (langId) {
  return fetch(`${apiBaseUrl}/rocctoppernavbar&language=${langId}&output_format=JSON`, requestOptions).then(handleResponse)
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
