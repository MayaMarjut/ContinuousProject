var express = require('express');
var router = express.Router();
const ps = require('./topicService');


/* GET users listing. */
router.get('/',function(req, res, next) {
   ps.getTopics((rows) => {
     res.json(rows);
   })
})
  router.post('/', function (req,res,next) {
    ps.createTopic(req.body, (rowCount) => {
      if(rowCount>0)
      res.status(201).json({message:'success'});
      else{
        res.status(400).json({message:'error'});
      }
    })
})
router.delete('/:title', function(req,res,next) {
  ps.deleteTopic(req.params.title, (rowCount) => {
    if(rowCount>0)
    res.status(200).json({message:'success'});
    else{
      res.status(400).json({message:'error'});
    }
  })
})
  

module.exports = router;
