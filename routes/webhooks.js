var express = require('express');
var router = express.Router();
var childProcess = require('child_process');;

/* GET users listing. */
router.post('/github', function(req, res, next) {
    var commits = req.body.commits; 
    var sender = req.body.sender;

    if(commits.length > 0 && sender.login === 'submetu'){
        deploy();
        res.send('200');
        
        console.log(req.body);
    }


});

function deploy(){
    var child = childProcess.spawn('./deploy.sh', {
        stdio: 'inherit',
        shell: true,
        cwd: '/home'
      });
      child.unref();
}

module.exports = router;
