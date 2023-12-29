const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
    target: 'http://172.233.176.150:4444',
    changeOrigin: true
}

module.exports = function(app) {
    app.use(
        '/elements',
        createProxyMiddleware(proxy)
    )
}