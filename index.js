var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var PORT = 9999;
app.use(express.static(__dirname + '/public'));

//載入模組
var connection = require('./config/connection');

app.get('/', function (req, res) {
    res.sendfile('./index.html');
});





// //三立新聞
// app.get('/setn', function (req, res) {
//     res.sendfile('public/page/setn.html');
//     setn(io);

// })
// // TVBS
// app.get('/tvbs', function (req, res) {
//     res.sendfile('public/page/tvbs.html');
//     tvbs(io);
// })

//測試封裝
app.get('/test', function (req, res) {
    res.sendfile('public/page/test.html');
    //取檔案的路徑
    takefilepath = './public/store/test/';
    //在modifyhtml.js 中的 function 名稱
    functionName = 'testdata2';
    //該網站下載後儲存的目錄
    storeDir = 'public/store/test/';
    //要下載的網站URL
    siteurl = 'https://www.setn.com/';

    connection(io,siteurl,storeDir,takefilepath,functionName);
})

//三立新聞 970250
app.get('/setn', function (req, res) {
    res.sendfile('public/page/setn.html');
    siteurl = 'https://www.setn.com/';
    storeDir = 'public/store/setn/';
    takefilepath = './public/store/setn/';
    functionName = 'setn';
    connection(io,siteurl,storeDir,takefilepath,functionName);
})

//三立新聞 手機板 320 480
app.get('/setn_m_300250', function (req, res) {
    res.sendfile('public/page/setn_m_320480.html');
    siteurl = 'https://www.setn.com/m/';
    storeDir = 'public/store/setn_m_320480/';
    takefilepath = './public/store/setn_m_320480/';
    functionName = 'setn_m_320480';
    connection(io,siteurl,storeDir,takefilepath,functionName);
})

// TVBS 300600
app.get('/tvbs', function (req, res) {
    res.sendfile('public/page/tvbs.html');
    siteurl = 'https://news.tvbs.com.tw/';
    storeDir = 'public/store/tvbs/';
    takefilepath = './public/store/tvbs/';
    functionName = 'tvbs';
    connection(io,siteurl,storeDir,takefilepath,functionName);
})

// udn 聯合新聞 300250
app.get('/udn_300250', function (req, res) {
    res.sendfile('public/page/udn_300250.html');
    siteurl = 'https://udn.com/news/index';
    storeDir = 'public/store/udn_300250/';
    takefilepath = './public/store/udn_300250/';
    functionName = 'udn_300250';
    connection(io,siteurl,storeDir,takefilepath,functionName);
})

//udn 聯合新聞 手機 300250
app.get('/udn_m_300250', function (req, res) {
    res.sendfile('public/page/udn_m_300250.html');
    siteurl = 'https://udn.com/mobile/index';
    storeDir = 'public/store/udn_m_300250/';
    takefilepath = './public/store/udn_m_300250/';
    functionName = 'udn_m_300250';
    connection(io,siteurl,storeDir,takefilepath,functionName);
})

//udn 聯合新聞 手機板 320 480
app.get('/udn_m_320480', function (req, res) {
    res.sendfile('public/page/udn_m_320480.html');
    siteurl = 'https://udn.com/mobile/index';
    storeDir = 'public/store/udn_m_320480/';
    takefilepath = './public/store/udn_m_320480/';
    functionName = 'udn_m_320480';
    connection(io,siteurl,storeDir,takefilepath,functionName);
})

// 運動世界 300250
app.get('/sportsv_300250', function (req, res) {
    res.sendfile('public/page/sportsv_300250.html');
    siteurl = 'https://www.sportsv.net/';
    storeDir = 'public/store/sportsv_300250/';
    takefilepath = './public/store/sportsv_300250/';
    functionName = 'sportsv_300250';
    connection(io,siteurl,storeDir,takefilepath,functionName);
})
server.listen(PORT);
