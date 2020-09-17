import { apiBaseUrl } from '@/config/config'
import { requestOptions, handleResponse } from './utils'

export function getProduct () {
  return fetch(`${apiBaseUrl}/products/18/&output_format=JSON`, requestOptions).then(handleResponse)
}
