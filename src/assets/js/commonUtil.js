const common = {
    // 檢查是否為開發模式
    isLocal() {
        const nodeEnv = process.env.NODE_ENV;
        if (nodeEnv == 'development') {
            return true;
        }
        return false;
    },

    //滾動到指定y軸
    scroll2Position(y) {
        window.scrollTo(0, y);
    }
}

export default common;
