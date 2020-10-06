import { apiBaseUrl } from '@/config/settings'
import { requestOptions, handleResponse, wrapRequest, xapi } from './utils'

export function getProduct () {
  return fetch(`${apiBaseUrl}/products/18`, requestOptions).then(handleResponse)
}

// export function getProductFilters () {
//   return fetch(`${apiBaseUrl}/roccomediaproductfilter?output_format=JSON&display=full`, requestOptions).then(handleResponse)
// }

export const getProductFilters = wrapRequest(async => xapi().get('/roccomediaproductfilter?display=full'))
