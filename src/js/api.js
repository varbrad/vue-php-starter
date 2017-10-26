import { stringify } from 'qs'

const URI = './api/ajax.php'

export function get (data) {
  data = data || {}
  return window.fetch(URI + '?' + stringify(data), {
    method: 'get'
  })
}

export function post (data) {
  data = data || {}
  return window.fetch(URI, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}