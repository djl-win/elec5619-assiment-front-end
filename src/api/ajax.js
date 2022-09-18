import axios from 'axios';
import {toast} from 'react-toastify';
/* 
    data:请求参数
    type:请求方式
*/

export default function ajax(url, data = {}, type = 'GET') {
    return new Promise((resolve, reject) => {
        let promise/* 这里用let是因为const不允许在声明时不赋值;而且单独提一个promise出来是因为下面有两种情况 */
        // 1.执行异步ajax请求
        if (type === 'GET') {
            promise = axios.get(url, {
                params: data
            })
        } else if(type === 'POST'){
            promise = axios.post(url, data)
        } else if(type === 'PUT'){
            promise = axios.put(url, data)
        } else if(type === 'DELETE'){
            promise = axios.delete(url, data)
        } 
        // 2.如果成功了，调用resolve(value)
        promise.then(value => {
            resolve(value.data)
            // 3.如果失败了，不调用reject(reason)，而是提示异常信息
        }).catch(error => {
            toast.error('something wrong: '+ error.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
    })
};
