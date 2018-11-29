const http = require('http');
const path = require("path");
const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');

const config = require('./config');

const serve = serveStatic('hugo/public', {'index': ['index.html', 'index.htm']});

function parseCookies (request) {
  const list = {},
    rc = request.headers.cookie;
  rc && rc.split(';').forEach(function( cookie ) {
    const parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });
  return list;
}


const getUserDetails = async (token) => http.get({
  hostname: config.RIO_CORE_ROOT_URL,
  path: `/api/user/me/get`,
  headers: {
    'Authorization': `Bearer ${token}`,
  }
});

const server = http.createServer(async function onRequest (req, res) {
  const { token } = parseCookies(req);
  if(!token) {
    res.writeHead(302, {
      'Location': `${config.AUTH_FRONTEND_URL}/login/?redirectUrl=//${req.headers.host}${req.url}`,
    });
    res.end();
  }
  const filename = path.basename(req.url);
  const extension = path.extname(filename);
  if (['.css', '.js', '.jpeg', '.png', '.ico', '.eot', '.svg', '.ttf', '.woff'].includes(extension)) {
    serve(req, res, finalhandler(req, res));
  } else {
    try {
      await getUserDetails(token);
      serve(req, res, finalhandler(req, res));
    } catch (err) {
      res.writeHead(302, {
        'Location': `${config.AUTH_FRONTEND_URL}/login/?redirectUrl=//${req.headers.host}`,
      });
      res.end();
    }
  }
});

server.listen(3000);
