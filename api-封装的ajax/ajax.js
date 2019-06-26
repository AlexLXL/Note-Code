import axios from "axios";
import { message } from "antd";

export default function ajax(url, data, method='get') { // data用的时候传的就是对象
  let reqParam = data;
  method = method.toLowerCase();

  if(method === 'get') {
    reqParam = {
      params: data
    }
  }

  return axios[method](url,reqParam)     				// 返回的是promise对象，使用时结合async和await. === 这里涉及跨域，可用代理服务器 === 
    .then((res) => {                              		// 请求返回的内容res
      const { data } = res;

      if(data.status === 0) {
        return data.data || {};     					// 上面的return本质返回的是promise  .then  .catch的返回值
      }else {
        message.error(data.msg, 2);              		 // 登录失败
      }
    })
    .catch((err) => {
      message.error('网络故障，请刷新网页~',2);
    })
}