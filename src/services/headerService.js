import { apiBaseUrl } from '@/config/settings'
import { requestOptions, handleResponse } from './utils'

export function getTopIcons (langId) {
  return fetch(`${apiBaseUrl}/rocctoppernavbar&language=${langId}`, requestOptions).then(handleResponse)
}

export function getMenu (params) {
  return fetch(`${apiBaseUrl}/rmapi/rest/header_menu?id_shop=${params.shopId}&id_lang=${params.langId}`, requestOptions).then(handleResponse)
}
