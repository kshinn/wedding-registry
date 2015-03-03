var express = require('express')
    router = express.Router();

module.exports = function (app) {
  app.use('/partials', router);
};

router.get('/:template', function(req, res) {
  res.render('partials/' + req.params.template);
})
