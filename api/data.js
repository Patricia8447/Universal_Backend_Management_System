import axios from './axios'

export const getMenu = (param) => {
    return axios.retuest({
        url: '/permission/getMenu',
        method: 'post',
        data: param
    })
}

export const getData = () => {
    return axios.request({
        url: '/home/getData',
        
    })
}