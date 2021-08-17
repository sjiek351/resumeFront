import axios from 'axios';

import common from './commonUtil';

const api = {
    useFakeData: true,//如果為部屬模式，仍要使用json假資料

    // 發送get請求，取得json資料
    getJson(url, data) {
        return axios({
            method: "get",
            url: `./static/json/${url}.json`,
            data: data ? data : {}
        });
    },

    // 發送get請求
    get(url, data) {
        //檢查如果為開發模式，則改為取得json資料
        if (common.isDev() || this.useFakeData) {
            return this.getJson(url, data);
        }

        return axios({
            method: "get",
            url: url,
            data: data ? data : {}
        });
    },

    // 發送post請求
    post(url, data) {
        //檢查如果為開發模式，則改為取得json資料
        if (common.isDev() || this.useFakeData) {
            return this.getJson(url, data);
        }

        return axios({
            method: "post",
            url: url,
            data: data ? data : {}
        });

    }

}

export default api;
