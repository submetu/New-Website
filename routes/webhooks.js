var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/github', function(req, res, next) {
    var commits = req.body.commits; 
    var sender = req.body.sender;

    if(commits.length > 0 && sender.login === 'submetu'){
        console.log('RESTART SERVER!!!');
    }
    console.log(commits, sender);
    
});

module.exports = router;
