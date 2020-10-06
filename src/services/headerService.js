import { apiBaseUrl } from '@/config/settings'
import { requestOptions, handleResponse } from './utils'

export function getTopIcons (langId) {
  return fetch(`${apiBaseUrl}/rocctoppernavbar&language=${langId}`, requestOptions).then(handleResponse)
}
