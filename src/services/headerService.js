import { apiBaseUrl } from '@/config/config'
import { requestOptions, handleResponse } from './utils'

export function getTopIcons (langId) {
  return fetch(`${apiBaseUrl}/rocctoppernavbar&language=${langId}&output_format=JSON`, requestOptions).then(handleResponse)
}
