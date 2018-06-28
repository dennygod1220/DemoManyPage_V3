var fs = require('fs');
var cheerio = require('cheerio');

var modifyhtml = {
    modifyhtml: function (socketID, path, funcname) {
        fs.readFile(path + socketID + '/index.html', 'utf8', function (err, data) {
            testdata[funcname](data);
            // testdata(data);
        });
        var testdata = {

            testdata2: function (data) {
                var $ = cheerio.load(data);
                $("script[src='advertisement']").remove();
                $('<ins class="clickforceads" style="display:inline-block;width:970px;height:250px;" data-ad-zone="7965"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script>').insertAfter('#bar_ad');
                fs.writeFile(path + socketID + '/index.html', $.html(), function () {
                    console.log('callback')
                });
            },
            //增加網站 將該網站需修改的HTML部份以及需要新增的版位code家在這裡
            setn: function (data) {
                var $ = cheerio.load(data);
                $("script[src='advertisement']").remove();
                $('<ins class="clickforceads" style="display:inline-block;width:970px;height:250px;" data-ad-zone="7965"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script>').insertAfter('#bar_ad');
                fs.writeFile(path + socketID + '/index.html', $.html(), function () {
                    console.log('callback setn')
                });
            },
            //TVBS
            tvbs: function (data) {
                var $ = cheerio.load(data);
                $("#v4_news_desktop_index_superrec_L2").remove();
                $('<ins class="clickforceads" style="display:inline-block;width:300px;height:600px;" data-ad-zone="7585"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script>').insertAfter('.ad_300x600.margin_b20');
                fs.writeFile('./public/store/tvbs/' + socketID + '/index.html', $.html(), function () {
                    console.log('callback tvbs')
                });
            },
            //udn
            udn_300250: function (data) {
                var $ = cheerio.load(data);
                $("#div-gpt-ad-1500889082311-1").children().remove();
                $('<ins class="clickforceads" style="display:inline-block;width:300px;height:250px;" data-ad-zone="7930"></ins><script async type="text/javascript" src="//cdn.doublemax.net/js/init.js"></script>').insertAfter("#div-gpt-ad-1500889082311-1");
                fs.writeFile('./public/store/udn_300250/' + socketID + '/index.html', $.html(), function () {
                    console.log('callback udn_300250')
                });
            },
            //運動世界
            sportsv_300250: function (data) {
                var $ = cheerio.load(data);
                fs.writeFile('./public/store/sportsv_300250/' + socketID + '/index.html', $.html(), function () {
                    console.log('callback sportsv_300250')
                });
            },
        }
    }
}


module.exports = modifyhtml;