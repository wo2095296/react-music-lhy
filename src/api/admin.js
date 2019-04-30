/**
 * Created by liaohuanyu on 2019/4/8.
 */
import {host} from './config'
import axios from 'axios'

export function admin(options) {
    let url;
    if(options.type === '登录'){
        url = '/admin/user/signIn'
    }else if(options.type === '注册'){
        url = '/admin/user/signUp'
    }
    const data = Object.assign({}, {userName:'',password:''}, options)

    return axios.post(url, data, {withCredentials:true}).then((res) => {
        return Promise.resolve(res.data)
    })
}
