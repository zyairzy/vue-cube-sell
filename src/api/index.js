import axios from 'axios'

const ERR_OK = 0

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 5000 // request timeout
})

export default function axiosGet (url, params) {
  return service({
    url: url,
    method: 'get',
    params
  }).then(res => {
    const { errno, data } = res.data
    if (errno === ERR_OK) {
      return data
    }
  }).catch(err => {
    console.log(err)
  })
}
