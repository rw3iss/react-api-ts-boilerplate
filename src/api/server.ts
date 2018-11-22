import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';
import * as logger from 'morgan';
import * as compression from 'compression'
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as path from 'path';
const debug = require('debug')('kk-api');
const favicon = require('serve-favicon');

import {pageContent} from './routes/pageContent';
import {healthcheck} from './routes/healthcheck';
import {product} from './routes/product';
import {serveSite} from './routes/serveSite';

const port = '5001';
const apiPath = path.resolve('.');

// HACK to auto-restart server on file changes, for development
var chokidar = require('chokidar')
var watcher = chokidar.watch('./build')
watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /build module cache from server")
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]build[\/\\]/.test(id)) delete require.cache[id]
      delete require.cache[id]
      process.exit();
    })
  })
})
////////////// end hack

const app: express.Express = express();
app.set('port', port);
app.use(cors());

// Todo: should be production-only: Probably don't need this with nginx gzip on prod server:
app.use(compression())

// view engine setup
//app.set('views', path.join(home, 'api', 'views'));
//app.set('view engine', 'jade');

// For when site is serving api and static files together
/* app.use((req, res, next) => {
    if (req.originalUrl.indexOf('/static') !== 0)
        console.log("Incoming request:", req.originalUrl);
    return next();
}) */

app.use(logger(function (tokens, req, res) {
    //console.log("LOG", req.originalUrl);
    // ignore static file log messages:
    if (req.originalUrl.indexOf('/static') === 0) return null;

    return [
      tokens.method(req, res),
      tokens.url(req, res),
      '-', tokens.status(req, res),
      '-',
      //'- Content-Length: ', tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }));
app.use(bodyParser.json({limit: '512mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//forward requests from elb http to https
//should ignore when running locally because x-forwarded-proto header shouldn't be present
/* app.use((req, res, next) => {
    const xf = req.get('X-Forwarded-Proto');
    if ((xf !== undefined) && (xf !== 'https')) {
        res.redirect('https://' + req.get('Host') + req.url);
    }
    else
        next();
});
 */

app.use(express.Router().head('/', (req: Express.Request, res: Express.Response) => {
    (res as any).status(400);
    (res as any).send();
}));

// First try API routes
app.use(pageContent);
app.use(product);
app.use(healthcheck);

// Serve favicon
//app.use(favicon(path.join(home, 'api', 'static', 'static', 'favicon.ico')));
app.use(express.static(path.join(apiPath, 'build')));

// All other requests should serve index.html
app.use(serveSite);

///////////////////////////////////////////////////////////////////////////////



// Error Handlers: ////////////////////////////////////////////////////////////

// catch 404 and forward to error handler
app.use((req: any, res: any, next: any) => {
    // hack to ignore js map errors polluting console
    if (req.url.endsWith('.js.map') || req.url.endsWith('min.map')) {
        return res.end('Not found: ' + req.url);
    }
    const err = new Error('Not Found: ' + req.url);
    (err as any).status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err: any, req: any, res: any) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err: any, req: any, res: any) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



// Start server ///////////////////////////////////////////////////////////////

//const server = http.createServer(app);
//(server as any).setTimeout(600000);
//server.on('error', onError);

app.listen(port);

//(server as any).listen(port, '0.0.0.0'); // missing typings for default listen func
console.log(`App listening on port ${port}`);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });