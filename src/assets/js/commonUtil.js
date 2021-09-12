const common = {
    // 檢查是否為開發模式
    isDev() {
        const nodeEnv = process.env.NODE_ENV;
        if (nodeEnv == 'development') {
            return true;
        }
        return false;
    },

    //取得今天日期 YYYY-MM-DD
    getToday() {
        return this.$moment().format('YYYY-MM-DD');
    },

    //滾動到指定y軸
    scroll2Position(y) {
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    },

    /* 檢核 */
    //取得字串byte, 預設中文佔3byte
    getByteLength(value) {
        let chiLength = 0;

        const regex = /[^\x00-\xff]/ig;//雙字節字符正則
        const chiArr = value.match(regex);
        if (chiArr) {
            chiLength = chiArr.length;
        }

        return (value.length - chiLength) + chiLength * 3;
    }

}

export default common;
