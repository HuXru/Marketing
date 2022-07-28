import axios from './http'

export function request(url:string, method = 'Get',param?:any) {
    return axios({
        url: url,
        method: method,
        data: param
    })
}