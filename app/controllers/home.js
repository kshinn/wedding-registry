var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

  db.Guest.findAll().success(function (articles) {
    res.render('index', {
      title: "Phoebe & Kris' Wedding",
    });
  });
});

router.get('/main', function(req, res) {
    res.render('main', {});
})
