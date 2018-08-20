import Vue from 'vue'
import VueResource from 'vue-resource'




Vue.use(VueResource)


//返回的值 成功就是resolve(response.data)，失败就是 reject(error)
export default function ajax(url){
  return new Promise(function(resolve,reject){
    Vue.http.jsonp(url).then(function(response){
      resolve(response.data)
      // console.log(response.data);
      },function(error){
        reject(error)
      })
    })
}
