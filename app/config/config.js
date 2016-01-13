var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var templatePath = path.normalize(__dirname + '/../templates');
var rev = '<%= date_rev %>';    
rev = rev.indexOf('%') < 0 ? '/' + rev : '';
var staticPath = path.normalize(__dirname + '/../dist');

var config = {
  dev: {
    root: rootPath,
    templatePath: templatePath,
    staticPath: staticPath,
    server: 'm.local.cn',
    api_server: require('./localAddress')() + ":4001",
    css_server: 'm.local.cn',
    js_server: 'm.local.node.cn',
    img_server: 'img21.mtimeimg.com',
    domain_site: '.local.cn',
    rev: rev
  }
};
var env = process.env.NODE_ENV || 'dev';
module.exports = config[env];