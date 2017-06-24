// Import modules
var express = require('express');
var app = express();

// Web Server Settings
// process.env�́Anode�̎��s���Ɏw��ł�����ϐ��I�Ȃ��́B
// PORT���w�肵�Ă���΂�����g���B
// PORT�́A��ʓI�Ȗ��̂Ǝv���Ă悳�����B
var port = (process.env.PORT || 3000);
var server = app.listen(port, function() {
    console.log('Server: Node is running on port ' + port);
});

// Router Settings(Connection test)
app.get('/', function(req, res, next) {
    res.send('Router: Node is running on port ' + port);
});

