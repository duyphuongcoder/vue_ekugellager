import { apiBaseUrl } from '@/config/settings'
import { requestOptions, handleResponse } from './utils'

export function getCustomText1 (langId) {
  return fetch(`${apiBaseUrl}/rocccustomhtml&language=${langId}&output_format=JSON`, requestOptions).then(handleResponse)
}
