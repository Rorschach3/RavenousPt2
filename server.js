const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search{URIE"
    changeOrigin: true,
    headers: {
      'Authorization': 'Bearer ${bGUFUXszfq4PPppy6eB3L0y9kCfPlmQ0CE1h3jgttqg6kEURVnQDK9P7iuu6VpEybd5lvbgB5visIUFlt71NR5zFxqy_zXs7zRKdlDBsNP4D930pfnXf832wPCmdZHYx}`,
      'Content-Type': 'application/json',
    },
    pathRewrite: {
      '^/api': '/v3/businesses',
    },
  })
);

app.listen(5000, () => {
  console.log('Proxy server is running on port 5000');
});
