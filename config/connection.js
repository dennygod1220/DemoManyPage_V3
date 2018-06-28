var deleteok = require('./deleteok');
var creativeid =require('./creativeid');


function connection(io,siteurl,storeDir,takefilepath,functionName) {

    //用 website-scraper module的方法下載
    io.once('connection', function (socket) {
        console.log('連線ID:' + socket.id);
        //指定下載頁面的URL和下載後檔案放置路徑
        var connect_id = socket.id
        var options = {
            urls: [siteurl],
            directory: storeDir + connect_id,
        };

    //deleteok.js
    deleteok(io,socket,options);


    creativeid(io,socket,takefilepath,functionName)

    });
}
module.exports = connection;
