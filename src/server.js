'use strict';
const http = require('node:http');
const {findProducts} = require('./catalog');
const port = Number(process.env.PORT || 3000);
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method === 'GET' && url.pathname === '/api/products') {
    res.writeHead(200);
    res.end(JSON.stringify(findProducts(url.searchParams.get('search') || '')));
    return;
  }
  if (req.method === 'GET' && url.pathname === '/api/health') {
    res.writeHead(200);res.end(JSON.stringify({status: 'ok'}));return;
  }
  res.writeHead(404);res.end(JSON.stringify({error: 'Not found'}));
});
if (require.main === module) server.listen(port, () => console.log(`API: http://localhost:${port}`));
module.exports = { server };
