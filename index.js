// Import modules
var express = require('express');
var app = express();

// Web Server Settings
// process.envは、nodeの実行時に指定できる環境変数的なもの。
// PORTが指定してあればそれを使う。
// PORTは、一般的な名称と思ってよさそう。
var port = (process.env.PORT || 3000);
var server = app.listen(port, function() {
    console.log('Server: Node is running on port ' + port);
});

// Router Settings(Connection test)
app.get('/', function(req, res, next) {
    res.send('Router: Node is running on port ' + port);
});

