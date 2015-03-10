var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

  db.Guest.findAll().success(function (articles) {
    res.render('main', {
      title: "Phoebe & Kris' Wedding - Please log in",
    });
  });
});

router.get('/guest', function(req,res) {
    db.Guest.findAll({where: {status: null}}).success(function(guests) {
        console.log('returning guests');
        res.send(guests);
    })
});

router.put('/guest/:id', function(req, res) {
    db.Guest.find(req.params.id).success(function(item) {
        item.updateAttributes({
                status: req.body.status,
                selectedGuests: req.body.selectedGuests,
                foodPref: req.body.foodPref
            }).success(function(item) {
            res.send(item).end();
        });
    })
})

