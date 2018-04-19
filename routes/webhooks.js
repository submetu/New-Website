var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/github', function(req, res, next) {
    let commits = req.body.commits; 
    let sender = req.body.sender;

    if(commits.length > 0 && sender.login === 'submetu'){
        console.log('RESTART SERVER!!!');
    }
    console.log(commits, sender);
});

module.exports = router;
