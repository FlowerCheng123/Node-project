var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var log4js = require('log4js');
var app = express();
var pierLog;
//config for the log file
if (app.get('env') === 'development'){
  log4js.configure({
    appenders: [
        {
            type: "file",
            filename: "pier-dev.log",
            category: [ 'pier','console' ]
        },
        {
            type: "console"
        }
    ],
    replaceConsole: true
  });

  log4js.loadAppender('file');
  pierLog = log4js.getLogger('pier-dev');
}else if(app.get('env') === 'production'){
  log4js.configure({
    appenders: [
        {
            type: "file",
            filename: "pier-product.log",
            category: [ 'pier','console' ]
        },
        {
            type: "console"
        }
    ],
    replaceConsole: true
  });

  log4js.loadAppender('file');
  pierLog = log4js.getLogger('pier-product');
}

log4js.loadAppender('file');
//only errors and above get logged.
//you can also set this log level in the config object
//via the levels field.
pierLog.setLevel('INFO');

var routes = require('./routes/index');
var users = require('./routes/users');
var merchants = require( './routes/merchants' );

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'pier')));

app.use('/', routes);
app.use('/users', users);
app.use('/merchant', merchants );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
