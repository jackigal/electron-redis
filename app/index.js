const {app, BrowserWindow} = require('electron');
global.APPPATH = {
    'scripts': `${__dirname}/scripts`,
    'resource': `${__dirname}/resource`,
    'styles': `${__dirname}/styles`,
    'views': `${__dirname}/views`
};
//global窗口控制
global.wins = {
    load: undefined
};

app.on('ready', () => {
    wins.load = new BrowserWindow(require(`${APPPATH.scripts}/config`) ('wins/load'));
});