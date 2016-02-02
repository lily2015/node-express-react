module.exports = function(app, io){
  require('../controllers/index/index').index(app, io);
};