var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/echo', function(req, res, next) {
  console.log("POST RECEIVED REQ.BODY: ", req.body);
  // if(!req.body) {
  //   res.json({error: "Perhaps you meant { \"thingie\":\"my text\" }"});
  // }
  res.json(req.body); // from the clj api docs -- "echoes a Thingie from json-body"
});

router.get('/api/times/:x/:y', function(req, res, next) {
  if(Math.random() * 10 > 8) {
    console.log("INTENTIONAL ERROR");
    res.status(404).end();
  }
  res.status(200).json(req.params.x * req.params.y);
});
module.exports = router;
