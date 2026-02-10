/**
 * SPA 배포용 정적 서버 (Node 내장 모듈만 사용)
 * /login, /dashboard 등 모든 경로 → index.html 반환 (404 방지)
 *
 * 사용: npm run build && node server.js
 * 기본 포트: 8080 (환경변수 PORT로 변경 가능)
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const ROOT = path.join(__dirname, 'dist', 'app', 'browser');

const MIMES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url?.split('?')[0] || '/';
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = path.join(ROOT, urlPath);
  const ext = path.extname(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err || !data) {
      // 파일 없음 → SPA fallback: index.html
      const indexPath = path.join(ROOT, 'index.html');
      fs.readFile(indexPath, (e, indexData) => {
        if (e || !indexData) {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('index.html not found. Run: npm run build');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(indexData);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': MIMES[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`SPA server: http://localhost:${PORT}`);
  console.log(`(All routes like /login, /dashboard serve index.html)`);
});
