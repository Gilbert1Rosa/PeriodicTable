const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
    target: 'http://localhost:4444',
    changeOrigin: true
}

module.exports = function(app) {
    app.use(
        '/elements',
        createProxyMiddleware(proxy)
    )
}