import axios from 'axios';

import common from './commonUtil';

const api = {
    // 發送get請求，如果為開發模式，則回傳假資料
    get(url, data) {
        return axios({
            method: "get",
            url: common.isDev() ? `/static/json/${url}.json` : url,
            data: data ? data : {}
        });
    },

    // 發送post請求
    post(url, data) {
        //檢查如果為開發模式，則改為發送get請求
        if (common.isDev()) {
            return this.get(url, data);
        }

        return axios({
            method: "post",
            url: url,
            data: data ? data : {}
        });
    }

}

export default api;
