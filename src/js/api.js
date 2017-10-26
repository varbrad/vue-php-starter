import * as axios from 'axios'

const URI = './api/ajax.php'

export function get (params) {
  params = params || {}
  return axios.get(URI, {
    params: params
  })
}
