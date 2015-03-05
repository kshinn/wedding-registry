var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

  db.Guest.findAll().success(function (articles) {
    res.render('index', {
      title: "Phoebe & Kris' Wedding - Please log in",
    });
  });
});

router.get('/main', function(req, res) {
    res.render('main', {
        title: "Phoebe and Kris' Wedding - Please log in", name: 'test'});
})

router.post('/main', function(req, res) {
    console.log(req.body);
    res.render('main', {name: 'test'});
});

router.get('/guest', function(req,res) {
    db.Guest.findAll().success(function(guests) {
        console.log('returning guests');
        res.send(guests);
    })
});

router.put('/guest/:id', function(req, res) {
    db.Guest.find({id: req.params.id}).success(function(item) {
        console.log(item);
        item.updateAttributes(req.body).success(function(item) {
            res.status(204).end();
        });
    })
})

router.post('/guest/rsvp', function(req, res) {
    console.log(req.body);
    res.send('ok');
})
