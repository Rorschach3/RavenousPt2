const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://cors-anywhere.herokuapp.com/",
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // If your API doesn't have a subpath, you can remove this line
      },
    })
  );
};
