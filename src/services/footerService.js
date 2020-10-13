import { apiBaseUrl } from '@/config/settings'
import { requestOptions, handleResponse } from './utils'

export function getContentModule (params) {
  return fetch(`${apiBaseUrl}/rmapi/rest/cms?id_shop=${params.shopId}&id_lang=${params.langId}&id_page=${params.pageId}`, requestOptions).then(handleResponse)
}
