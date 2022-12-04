import axios from 'axios'
import {urls} from './constants'

const jsonUrl = (json) => {
  let arr = []
  let str = ''
  for (let i in json) {
    str = i + '=' + json[i]
    arr.push(str)
  }
  return arr.join('&')
}

const fetch = (url,data,method = 'get',postHeaders) => {
  url = url.url
  if(url){
    for (let k in data){
      if(url.indexOf(':'+ k) !== -1){
        url = url.replace(':'+ k ,data[k])
        delete data[k]
      }
    }
  }

  let realUrl = urls.server[process.env.NODE_ENV] + url
  let type = method.toLowerCase()
  let res = {}
  if(type === 'get'){
    res = axios.get(realUrl + '?' + jsonUrl(data))
  } else if(type === 'post'){
    res = axios.post(realUrl,data,postHeaders)
  }
  return res
}

export const api = {}

api['article_list'] = params => {
  return fetch (urls.article_list, params,'get')
}

api['article'] = params => {
  return fetch (urls.article, params,'get')
}

api['page'] = params => {
  return fetch (urls.page, params,'get')
}

api['index'] = params => {
  return fetch (urls.index, params,'get')
}
api['articleCat'] = params => {
  return fetch (urls.articleCat, params,'get')
}




