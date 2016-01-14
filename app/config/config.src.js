var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var templatePath = path.normalize(__dirname + '/../../views');
var rev = '<%= date_rev %>';
rev = rev.indexOf('%') < 0 ? '/' + rev : '';
var staticPath = path.normalize(__dirname + '/../../public');

var ipAddress = require('./localAddress')();
var mainport = process.env.MAINPORT || '4050';
var apiport = process.env.APIPORT || '4051';
var devServer = ipAddress + ":" + mainport;

var config = {
  dev: {
    root: rootPath,
    templatePath: templatePath,
    staticPath: staticPath, 
    logsPath: "logs/",
    server: devServer,
    api_server: ipAddress + ":" + apiport,
    css_server: devServer,
    js_server: devServer,
    img_server: 'img21.mtimeimg.com',
    domain_site: ".mtime.cn",
    rev: rev
  }
};
var env = process.env.NODE_ENV || 'dev';
module.exports = config[env];