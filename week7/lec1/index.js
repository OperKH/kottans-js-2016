'use strict';
const App = require('./app');
const config = require('config');

const webServerConfig = config.get('webServer.config');

const app = new App();
app.use((req, res) => {
    console.log('url', req.url);
    console.log('method', req.method);
});
app.use((req, res) => {
    console.log(req.headers);
    res.end('Hello World');
});
app.start(webServerConfig.host, webServerConfig.port, () => console.log(`listening on ${webServerConfig.port}`));
