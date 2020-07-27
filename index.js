var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1654548411,
  channelSecret: 94436e9876a7786e14b5f17fa2924d43,
  channelAccessToken: 50MdRgqFXXcFqZyx1oHh/VGRgaen79pLr6DddToVMz+Kse/ihv5e4dX33lvWsWwrwAqFyIXPtCXG22wBNv9uXHR4TecfPbrY2577B+JDjvSZF5jXqDdnUsGXgV3rk378X1BUUO0xs0t9llLjM/fLzgdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});