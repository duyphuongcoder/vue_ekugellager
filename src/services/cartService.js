import { apiBaseUrl, appToken } from '@/config/settings'
import { handleResponse } from './utils'
import store from '../store'
const requestOptions = {
  headers: {
    Authorization: 'Basic ' + appToken
  }
}
const cartId = store.getters.cart ? store.getters.cart.entity_id : 0
export function getCartDetails (params) {
  requestOptions.method = 'GET'
  return fetch(`${apiBaseUrl}/rmapi/rest/carts/${cartId}?id_lang=${params.id_lang}&id_shop=${params.id_shop}`, requestOptions).then(handleResponse)
}
export function addToCart (params) {
  requestOptions.method = 'POST'
  requestOptions.body = JSON.stringify(params)
  return fetch(`${apiBaseUrl}/rmapi/rest/carts/${cartId}`, requestOptions).then(handleResponse)
}
export function updateInCart (params) {
  requestOptions.method = 'PUT'
  requestOptions.body = JSON.stringify(params)
  return fetch(`${apiBaseUrl}/rmapi/rest/carts/${cartId}/items`, requestOptions).then(handleResponse)
}
export function removeFromCart (params) {
  requestOptions.method = 'DELETE'
  return fetch(`${apiBaseUrl}/rmapi/rest/carts/${cartId}/items/${params.ps_item_id}`, requestOptions).then(handleResponse)
}
