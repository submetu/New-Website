var express = require('express');
var router = express.Router();
var childProcess = require('child_process');;

/* GET users listing. */
router.post('/github', function(req, res, next) {
    var commits = req.body.commits; 
    var sender = req.body.sender;
    var branch = req.body.ref;

    if(branch.indexOf('master') > -1 && commits.length > 0 && sender.login === 'submetu'){
        deploy();
        res.send('200');
        
        
    }
    else{
        res.send(500);
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
