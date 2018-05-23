var express = require('express');
var router = express.Router();
var childProcess = require('child_process');;

/* GET users listing. */
router.post('/github', function (req, res, next) {
    var commits = req.body.commits;
    var sender = req.body.sender;
    var branch = req.body.ref;

    if (branch.indexOf('master') > -1 && commits.length > 0 && sender.login === 'submetu') {
        deploy(res);
    }
});

function deploy(res) {
    childProcess.exec('cd /home && ./deploy.sh', function (err, stdout, stderr) {
        if (err) {
            console.error(err);
            return res.send(500);
        }
        res.send(200);
    });
}

module.exports = router;
