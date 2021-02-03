import axios from 'axios'

const $http = axios.create({
  // 接口地址
  // baseURL: 'http://172.16.132.159:8888/'
})

// 这部分还得改，数据有问题
export const get = (url, params) => {
  params = params || {}
  return new Promise((resolve, reject) => {
    // axiso 自带 get 和 post 方法
    $http.get(url, {
      params
    }).then(res => {
      // if (res.data.status === 404) {
      //   resolve(res.data)
      // } else {
      //   alert(res.data.msg)
      // }
      console.log(res.data)
    }).catch(error => {
      alert('网络异常' + error)
    })
  })
}

export const post = (url, params) => {
  params = params || {}
  return new Promise((resolve, reject) => {
    $http.post(url, params).then(res => {
      if (res.data.status === 0) {
        resolve(res.data)
      } else {
        alert(res.data.msg)
      }
    }).catch(error => {
      alert('网络异常' + error)
    })
  })
}
