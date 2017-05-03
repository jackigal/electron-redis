const config = {
    wins: {
        load: {
            width: 400, height: 300, autoHideMenuBar: true,
            resizable: false, movable: false, center: true,
        }
    }
};
module.exports = (str) => {
    if ('string' === typeof str) {
        let keys = str.split('/');
        let ret = undefined;
        keys.forEach((val) => {
            if (ret) {
                ret = ret[val];
            } else if (undefined !== config[val]) {
                ret = config[val];
            } else {
                throw new Error(`${val} 配置不存在`);
            }
        });
        return ret;
    } else { throw new Eror('配置调用方式错误'); }
};