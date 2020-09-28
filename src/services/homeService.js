import { apiBaseUrl } from '@/config/settings'
import { requestOptions, handleResponse } from './utils'

export function getCustomText1 (langId) {
  return fetch(`${apiBaseUrl}/rocccustomhtml&language=${langId}&output_format=JSON`, requestOptions).then(handleResponse)
}
export function getQuestions (langId) {
  return fetch(`${apiBaseUrl}/roccproductadvisor?output_format=JSON&display=full&query=questions`, requestOptions).then(handleResponse)
}
export function getAnswers (langId) {
  return fetch(`${apiBaseUrl}/roccproductadvisor?output_format=JSON&display=full&query=answers`, requestOptions).then(handleResponse)
}
export function lastOrder () {
  return fetch(`${apiBaseUrl}/rocchomelastorder?output_format=JSON`, requestOptions).then(handleResponse)
}
