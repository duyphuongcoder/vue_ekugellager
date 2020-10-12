import { apiBaseUrl } from '@/config/settings'
import { requestOptions, handleResponse, wrapRequest, xapi } from './utils'

export function getProduct (params) {
  return fetch(`${apiBaseUrl}/rmapi/rest/products?id_shop=${params.shopId}&id_lang=${params.langId}&id_category=${params.cateId}&page_num=${params.page}&page_size=${params.perPage}`, requestOptions).then(handleResponse)
}

// export function getProductFilters () {
//   return fetch(`${apiBaseUrl}/roccomediaproductfilter?output_format=JSON&display=full`, requestOptions).then(handleResponse)
// }

export const getProductFilters = wrapRequest(async => xapi().get('/roccomediaproductfilter?display=full'))
