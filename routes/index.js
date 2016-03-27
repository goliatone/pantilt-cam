var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PanTilt Cam' });
});

module.exports = function(app, config){
    app.use('/', router);
};
