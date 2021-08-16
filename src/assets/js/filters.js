const filters = {
    //格式化手機號碼 0900-000-000
    phoneFormat(value) {
        if (!value || value.length != 10) {
            return null;
        }
        return `${value.substring(0, 4)}-${value.substring(4, 7)}-${value.substring(7, 10)}`;
    },
}

export default filters;